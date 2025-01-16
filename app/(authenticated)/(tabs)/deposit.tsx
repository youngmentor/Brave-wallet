import { View, Text, TouchableOpacity, StyleSheet, Share, Alert } from 'react-native';
import React from 'react';
import Colors from '@/constants/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { depositStyles } from '@/styleSheet/depositStyles';
import { useRouter } from 'expo-router';
import Clipboard from '@react-native-clipboard/clipboard';

const Page = () => {
  const router = useRouter();

  const copyToClipboard = (text: string) => {
    Clipboard.setString(text);
    Alert.alert('Copied to Clipboard', `Account detail "${text}" copied successfully!`);
  };

  const shareDetails = async (details: { accountNumber: string; accountName: string }) => {
    const message = `Account Details:\nAccount Number: ${details.accountNumber}\nAccount Name: ${details.accountName}`;
    try {
      const result = await Share.share({ message });
      if (result.action === Share.sharedAction) {
        console.log('Shared successfully');
      } else if (result.action === Share.dismissedAction) {
        console.log('Share dismissed');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to share details');
    }
  };

  return (
    <View style={depositStyles.container}>
      <View style={[depositStyles.balance, { backgroundColor: Colors.background, flexDirection: 'column' }]}>
        <View style={depositStyles.accountdetailsWrap}>
          <View style={depositStyles.accountdetails}>
            <MaterialCommunityIcons name="bank-outline" size={30} color={Colors.primary} />
          </View>
          <TouchableOpacity
            style={{ display: 'flex', flexDirection: 'column', gap: 5 }}
            onPress={() => router.push('/(authenticated)/(depositsFolder)/cashDeposit')}
          >
            <Text style={depositStyles.accountdetailsText}>Bank Transfer</Text>
            <Text style={depositStyles.accountdetailsText2}>Add money to your Brave account via transfer</Text>
          </TouchableOpacity>
        </View>

        <View style={depositStyles.dashedLine} />

        <View>
          <Text style={depositStyles.text}>Brave Wallet Account Number</Text>
        </View>

        <View style={depositStyles.accountDetails}>
          <Text style={depositStyles.accountNumber}>705 829 0856</Text>
          <View style={depositStyles.buttonContainer}>
            <TouchableOpacity
              style={depositStyles.copyButton}
              onPress={() => copyToClipboard('705 829 0856')}
            >
              <Text style={depositStyles.buttonText}>Copy Number</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={depositStyles.shareButton}
              onPress={() => shareDetails({ accountNumber: '705 829 0856', accountName: 'Brave Wallet' })}
            >
              <Text style={depositStyles.buttonText}>Share Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16, justifyContent: 'center' }}>
        <View style={{ height: StyleSheet.hairlineWidth, backgroundColor: Colors.gray, width: 80 }} />
        <Text style={{ color: 'black', fontSize: 16, fontWeight: 'light' }}>OR</Text>
        <View style={{ height: StyleSheet.hairlineWidth, backgroundColor: Colors.gray, width: 80 }} />
      </View>

      <View
        style={[
          depositStyles.balance,
          { backgroundColor: Colors.background, flexDirection: 'column', height: 80, justifyContent: 'center' },
        ]}
      >
        <View style={depositStyles.accountdetailsWrap}>
          <View style={depositStyles.accountdetails}>
            <MaterialCommunityIcons name="cash" size={30} color={Colors.primary} />
          </View>
          <TouchableOpacity
            style={{ display: 'flex', flexDirection: 'column', gap: 5 }}
            onPress={() => router.push('/(authenticated)/(depositsFolder)/cashDeposit')}
          >
            <Text style={depositStyles.accountdetailsText}>Cash Deposit</Text>
            <Text style={depositStyles.accountdetailsText2}>Fund your account with nearby merchant</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={[
          depositStyles.balance,
          { backgroundColor: Colors.background, flexDirection: 'column', height: 80, justifyContent: 'center' },
        ]}
      >
        <View style={depositStyles.accountdetailsWrap}>
          <View style={depositStyles.accountdetails}>
            <MaterialCommunityIcons name="credit-card-outline" size={30} color={Colors.primary} />
          </View>
          <TouchableOpacity
            style={{ display: 'flex', flexDirection: 'column', gap: 5 }}
            onPress={() => router.push('/(authenticated)/(depositsFolder)/cardDeposit')}>
            <Text style={depositStyles.accountdetailsText}>Top-up with Card/Account</Text>
            <Text style={depositStyles.accountdetailsText2}>Add money directly with your bank card or account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Page;
