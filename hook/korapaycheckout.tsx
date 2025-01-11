import React, { useRef, useCallback, useState } from 'react';
import WebView from 'react-native-webview';
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { View } from 'react-native';
interface KorapayCustomer {
  name: string;
  email: string;
}

interface KorapayConfig {
  publicKey: string;
  reference: string;
  amount: number;
  currency: string;
  customer: KorapayCustomer;
}

interface KorapayCallbacks {
  onClose?: () => void;
  onSuccess?: (data: any) => void;
  onFailed?: (data: any) => void;
}

export const useKorapayCheckout = ({
  paymentDetails,
  onClose,
  onSuccess,
  onFailed
}: {
  paymentDetails: KorapayConfig;
  onClose?: KorapayCallbacks['onClose'];
  onSuccess?: KorapayCallbacks['onSuccess'];
  onFailed?: KorapayCallbacks['onFailed'];
}) => {
  const webViewRef = useRef<WebView | null>(null);
  const [isCheckoutVisible, setIsCheckoutVisible] = useState(false);

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <script src="https://korablobstorage.blob.core.windows.net/modal-bucket/korapay-collections.min.js"></script>
    </head>
    <body>
      <div id="payment-root"></div>
    </body>
    </html>
  `;

  const initializePaymentScript = `
    try {
      window.Korapay.initialize({
        key: "${paymentDetails.publicKey}",
        reference: "${paymentDetails.reference}",
        amount: ${paymentDetails.amount},
        currency: "${paymentDetails.currency}",
        customer: {
          name: "${paymentDetails.customer.name}",
          email: "${paymentDetails.customer.email}"
        },
        onClose: function () {
          window.ReactNativeWebView.postMessage('PAYMENT_CLOSED');
        },
        onSuccess: function (data) {
          window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'SUCCESS', data }));
        },
        onFailed: function (data) {
          window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'FAILED', data }));
        }
      });
    } catch (error) {
      window.ReactNativeWebView.postMessage(JSON.stringify({
        type: 'FAILED',
        data: { message: 'Payment initialization failed: ' + error.message }
      }));
    }
    true;
  `;

  const handleMessage = useCallback((event: { nativeEvent: { data: string } }) => {
    const message = event.nativeEvent.data;

    if (message === 'PAYMENT_CLOSED') {
      setIsCheckoutVisible(false); // Hide WebView when payment is closed
      onClose?.();
      return;
    }

    try {
      const parsedMessage = JSON.parse(message);
      if (parsedMessage.type === 'SUCCESS') {
        setIsCheckoutVisible(false); // Hide WebView on success
        onSuccess?.(parsedMessage.data);
      } else if (parsedMessage.type === 'FAILED') {
        setIsCheckoutVisible(false); // Hide WebView on failure
        onFailed?.(parsedMessage.data);
      }
    } catch (error) {
      console.error('Error parsing WebView message:', error);
    }
  }, [onClose, onSuccess, onFailed]);

  const initiatePayment = useCallback(() => {
    setIsCheckoutVisible(true); // Show WebView
    setTimeout(() => {
      webViewRef.current?.injectJavaScript(initializePaymentScript);
    }, 500); 
  }, [initializePaymentScript]);

  const CheckoutComponent = useCallback(() => (
    isCheckoutVisible ? (
      <WebView
        ref={webViewRef}
        source={{ html: htmlContent }}
        onMessage={handleMessage}
      />
    ) : null
  ), [htmlContent, handleMessage, isCheckoutVisible]);

  return {
    CheckoutComponent,
    initiatePayment
  };
};
