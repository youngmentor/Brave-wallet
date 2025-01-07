import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors';
import transactions from '@/dummyData/Transaction';
import { Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { homeStyles } from '@/styleSheet/homeStyle';
import { useRouter } from 'expo-router';

const Page = () => {
  const router = useRouter()
  const [showBalance, setShowBalance] = React.useState(false);

  const handleShowBalance = () => {
    setShowBalance(!showBalance);
  }

  const handleAddBalance = () => {
    router.replace('/(authenticated)/(tabs)/deposit')     
  }

  const renderTransaction = ({ item }: { item: { description: string; date: string; amount: string; status: string; id: string } }) => (
    <View style={homeStyles.transactionCard}>
      <View style={homeStyles.transactionDetails}>
        <Text style={homeStyles.transactionDescription}>{item.description}</Text>
        <Text style={homeStyles.transactionDate}>{item.date}</Text>
      </View>
      <View style={homeStyles.transactionStatus_amount}>
        <Text style={homeStyles.transactionAmount}>{item.amount}</Text>
        <Text
          style={[
            homeStyles.transactionStatus,
            item.status === 'Completed' && homeStyles.completedStatus,
            item.status === 'Pending' && homeStyles.pendingStatus,
            item.status === 'Failed' && homeStyles.failedStatus,
          ]}
        >
          {item.status}
        </Text>
      </View>
    </View>
  );
  return (
    <View
      style={[
        homeStyles.container,
      ]}
    >
      <View style={homeStyles.balance}>
        <View>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <Text style={homeStyles.text}>Available Balance </Text>
            <TouchableOpacity onPress={handleShowBalance} style={{ marginTop: 6 }}>
              {
                showBalance ? <Feather name="eye-off" size={14} color='white' /> :
                  <Feather name="eye" size={14} color='white' />
              }
            </TouchableOpacity>
          </View>
          <Text style={homeStyles.amount}>{showBalance ? '****' : '$100.00'}</Text>
        </View>
        <View >
          <Text style={homeStyles.history}>Transaction history</Text>
          <TouchableOpacity style={homeStyles.addmoneyWrap} onPress={handleAddBalance}>
            <Text style={homeStyles.addmoney}>Add Money</Text>
          </TouchableOpacity>
        </View>
      </View>
      {
        showBalance ? null :
          <FlatList
            data={transactions}
            renderItem={renderTransaction}
            keyExtractor={(item) => item.id}
            contentContainerStyle={homeStyles.transactionsList}
          />
      }

      <View style={[homeStyles.balance, { backgroundColor: 'white', height: 150, justifyContent: 'space-around', alignItems: 'center', flexDirection: 'column' }]}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '95%' }}>
          <TouchableOpacity style={homeStyles.actionWrap}>
            <MaterialCommunityIcons name="wallet" size={24} color={Colors.primary} />
            <Text style={homeStyles.addmoney}>To Brave</Text>
          </TouchableOpacity>
          <TouchableOpacity style={homeStyles.actionWrap}>
            <MaterialCommunityIcons name="bank" size={24} color={Colors.primary} />
            <Text style={homeStyles.addmoney}>To Bank</Text>
          </TouchableOpacity>
          <TouchableOpacity style={homeStyles.actionWrap}>
            <Feather name="send" size={24} color={Colors.primary} />
            <Text style={homeStyles.addmoney}>Withdraw</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '95%' }}>
          <TouchableOpacity style={homeStyles.actionWrap}>
            <Feather name="bar-chart" size={24} color={Colors.primary} />
            <Text style={homeStyles.addmoney}>Airtime</Text>
          </TouchableOpacity>
          <TouchableOpacity style={homeStyles.actionWrap}>
            <MaterialCommunityIcons name="clipboard-flow-outline" size={24} color={Colors.primary} />
            <Text style={homeStyles.addmoney}>Data</Text>
          </TouchableOpacity>
          <TouchableOpacity style={homeStyles.actionWrap}>
            <MaterialIcons name="live-tv" size={24} color={Colors.primary} />
            <Text style={homeStyles.addmoney}>Tv</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}

export default Page