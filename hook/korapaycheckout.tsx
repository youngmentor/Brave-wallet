import React, { useRef, useCallback } from 'react';
import WebView from 'react-native-webview';

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

export const useKorapayCheckout = (config: KorapayConfig, callbacks: KorapayCallbacks = {}) => {
    console.log('Configurations',config);
    
    const webViewRef = useRef<WebView | null>(null);

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
        key: "${config.publicKey}",
        reference: "${config.reference}",
        amount: ${config.amount},
        currency: "${config.currency}",
        customer: {
          name: "${config.customer.name}",
          email: "${config.customer.email}"
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
            callbacks.onClose?.();
            return;
        }

        try {
            const parsedMessage = JSON.parse(message);
            if (parsedMessage.type === 'SUCCESS') {
                callbacks.onSuccess?.(parsedMessage.data);
            } else if (parsedMessage.type === 'FAILED') {
                callbacks.onFailed?.(parsedMessage.data);
            }
        } catch (error) {
            console.error('Error parsing WebView message:', error);
        }
    }, [callbacks]);

    const initiatePayment = useCallback(() => {
        webViewRef.current?.injectJavaScript(initializePaymentScript);
    }, [initializePaymentScript]);

    const CheckoutComponent = useCallback(() => (
        <WebView
            ref={webViewRef}
            source={{ html: htmlContent }}
            onMessage={handleMessage}
        />
    ), [htmlContent, handleMessage]);

    return {
        CheckoutComponent,
        initiatePayment,
        webViewRef
    };
};