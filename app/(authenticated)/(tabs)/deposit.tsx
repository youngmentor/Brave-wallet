import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { depositStyles } from '@/styleSheet/depositStyles'
import { useRouter } from 'expo-router'

const Page = () => {
  const router = useRouter()
  return (
    <View
      style={[
        depositStyles.container,
      ]}
    >
      <View style={[depositStyles.balance, { backgroundColor: Colors.background, flexDirection: 'column', }]}>
        <View style={depositStyles.accountdetailsWrap}>
          <View style={depositStyles.accountdetails}>
            <MaterialCommunityIcons name='bank-outline' size={30} color={Colors.primary}/>
          </View>
          <View style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            <Text style={depositStyles.accountdetailsText}>Bank Transfer</Text>
            <Text style={depositStyles.accountdetailsText2}>Add money to your Brave account via transfer</Text>
          </View>
        </View>
        <View style={depositStyles.dashedLine} />
        <View >
          <Text style={depositStyles.text}>Brave Wallet Account Number</Text>
        </View>
        <View style={depositStyles.accountDetails}>
          <Text style={depositStyles.accountNumber}>705 829 0856</Text>
          <View style={depositStyles.buttonContainer}>
            <TouchableOpacity style={depositStyles.copyButton}>
              <Text style={depositStyles.buttonText}>Copy Number</Text>
            </TouchableOpacity>
            <TouchableOpacity style={depositStyles.shareButton}>
              <Text style={depositStyles.buttonText}>Share Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16, justifyContent: 'center', }}>
        <View
          style={{ height: StyleSheet.hairlineWidth, backgroundColor: Colors.gray, width: 80 }}
        />
        <Text style={{ color: 'black', fontSize: 16, fontWeight: 'light' }}>OR</Text>
        <View
          style={{ height: StyleSheet.hairlineWidth, backgroundColor: Colors.gray, width: 80 }}
        />
      </View>
      <View style={[depositStyles.balance, { backgroundColor: Colors.background, flexDirection: 'column', height: 80, justifyContent: 'center' }]}>
        <View style={depositStyles.accountdetailsWrap}>
          <View style={depositStyles.accountdetails}>
            <MaterialCommunityIcons name='cash' size={30} color={Colors.primary}/>
          </View>
          <TouchableOpacity style={{ display: 'flex', flexDirection: 'column', gap: 5 }} onPress={()=>{
            router.replace('/(authenticated)/(depositsFolder)/cashDeposit')
          }}>
            <Text style={depositStyles.accountdetailsText}>Cash Deposit</Text>
            <Text style={depositStyles.accountdetailsText2}>Fund your account with nearby merchant</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[depositStyles.balance, { backgroundColor: Colors.background, flexDirection: 'column', height: 80, justifyContent: 'center' }]}>
        <View style={depositStyles.accountdetailsWrap}>
          <View style={depositStyles.accountdetails}>
            <MaterialCommunityIcons name='credit-card-outline' size={30} color={Colors.primary}/>
          </View>
          <View style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            <Text style={depositStyles.accountdetailsText}>Top-up with Card/Account</Text>
            <Text style={depositStyles.accountdetailsText2}>Add money directly with your bank card or account</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Page