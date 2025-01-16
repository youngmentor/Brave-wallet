import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { depositStyles } from '@/styleSheet/depositStyles'
import Colors from '@/constants/Colors'
// import { MaterialCommunityIcons } from '@expo/vector-icons'

const Page = () => {
  return (
    <View style={depositStyles.container}>
      <View
        style={[
          depositStyles.balance,
          { backgroundColor: Colors.background, flexDirection: 'column', height: 80, justifyContent: 'center' },
        ]}
      >
        <View style={depositStyles.accountdetailsWrap}>
          <View
            style={{ display: 'flex', flexDirection: 'column', gap: 5 }}
          >
            <Text style={[depositStyles.accountdetailsText, { fontWeight: "light" }]}>Tranxact Account</Text>
            <Text style={[depositStyles.accountdetailsText2, { fontSize: 35 }]}>7058290856</Text>
          </View>
          <View style={depositStyles.buttonContainer}>
            <TouchableOpacity
              style={[depositStyles.copyButton, { backgroundColor: Colors.primary, width: 100, display: 'flex', justifyContent: 'center', alignItems: 'center' }]}
            >
              <Text style={depositStyles.buttonText}>Copy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Page