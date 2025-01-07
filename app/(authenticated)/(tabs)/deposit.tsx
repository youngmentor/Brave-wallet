import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import {MaterialCommunityIcons } from '@expo/vector-icons'
import { depositStyles } from '@/styleSheet/depositStyles'

const Page = () => {
  return (
    <View
      style={[
        depositStyles.container,
      ]}
    >
      <View style={[depositStyles.balance, { backgroundColor: Colors.background, flexDirection: 'column', height: 200 }]}>
        <View style={depositStyles.accountdetailsWrap}>
          <View style={depositStyles.accountdetails}>
            <MaterialCommunityIcons name='bank-outline' size={20} />
          </View>
          <View style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            <Text style={depositStyles.accountdetailsText}>Bank Transfer</Text>
            <Text style={depositStyles.accountdetailsText2}>Add money to your Brave account via transfer</Text>
          </View>
        </View>
        <View >
          <Text >Transaction history</Text>
          <TouchableOpacity>
            <Text>Add Money</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Page