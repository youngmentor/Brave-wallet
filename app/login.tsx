import { View, Text, Platform, TouchableOpacity, KeyboardAvoidingView, StyleSheet, TextInput, Alert, Button, Modal } from 'react-native'
import React, { useState } from 'react'
import { Link, useRouter } from 'expo-router';
import { defaultStyles } from '@/constants/Styles';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import SecondaryButton from '@/components/btn';
// import { KorapayProps } from '@/interface/korapaycheckoutInterface';
// import Korapay from '@/hook/korapay';
import { useKorapayCheckout } from '@/hook/korapaycheckout';


const Page = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [isPaymentModalVisible, setIsPaymentModalVisible] = useState(false);

  const handlePayment = () => {
    setIsPaymentModalVisible(!isPaymentModalVisible);
  };
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 80 : 0;

  const onSignIn = async () => {
    router.replace('/(authenticated)/(tabs)/home')
  };
   let key = `key${Math.random()}`
  const paymentConfig = {
    publicKey: 'pk_test_he15XrzfEUVdK6cWaRbncZ76wfWFFYx5hnsSbQzS',
    reference: key,
    amount: 3000,
    currency: 'NGN',
    customer: {
      name: 'John Doe',
      email: 'john@doe.com'
    }
  };

  const callbacks = {
    onClose: () => console.log('Payment closed'),
    onSuccess: (data: any) => console.log('Payment successful:', data),
    onFailed: (data: any) => console.log('Payment failed:', data)
  };
  const { CheckoutComponent, initiatePayment } = useKorapayCheckout(paymentConfig, callbacks);
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={keyboardVerticalOffset}>
      <View style={defaultStyles.container}>
        <Text style={defaultStyles.header}>Welcome back</Text>
        <Text style={defaultStyles.descriptionText}>
          Enter the phone number associated with your account
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Email address"
            placeholderTextColor={Colors.gray}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Password"
            placeholderTextColor={Colors.gray}
            secureTextEntry
          />
        </View>
        <SecondaryButton
          onPress={onSignIn}
          text="Continue"
          disabled={email === ''}
          buttonStyle={{ marginBottom: 20 }}
          enabledStyle={{ backgroundColor: Colors.primary }}
          disabledStyle={{ backgroundColor: Colors.primaryMuted }}
          textStyle={{ color: email === '' ? '#fff' : '#fff' }}
        />
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
          <View
            style={{ flex: 1, height: StyleSheet.hairlineWidth, backgroundColor: Colors.gray }}
          />
          <Text style={{ color: Colors.gray, fontSize: 20 }}>or</Text>
          <View
            style={{ flex: 1, height: StyleSheet.hairlineWidth, backgroundColor: Colors.gray }}
          />
        </View>

        <TouchableOpacity
          onPress={initiatePayment}
          style={[
            defaultStyles.pillButton,
            {
              flexDirection: 'row',
              gap: 16,
              marginTop: 20,
              backgroundColor: '#fff',
            },
          ]}>
          <Ionicons name="logo-google" size={24} color={'#000'} />
          <Text style={[defaultStyles.buttonText, { color: '#000' }]}>Pay now </Text>
        </TouchableOpacity>
        <CheckoutComponent />

        <Link href={'/signup'} replace asChild>
          <TouchableOpacity>
            <Text style={[defaultStyles.textLink, { marginTop: 20, marginLeft: 10 }]}>Don't have an account? Creacte account</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </KeyboardAvoidingView>
  )
}
const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 15,
    flexDirection: 'row',
  },
  input: {
    backgroundColor: Colors.lightGray,
    padding: 20,
    borderRadius: 4,
    fontSize: 16,
    marginRight: 10,
  },
  enabled: {
    backgroundColor: Colors.primary,
  },
  disabled: {
    backgroundColor: Colors.primaryMuted,
  },
});
export default Page