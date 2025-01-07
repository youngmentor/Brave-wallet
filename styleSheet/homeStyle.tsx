import Colors from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
    container: {
      backgroundColor: Colors.background,
    },
    balance: {
      backgroundColor: Colors.primary,
      margin: 20,
      borderRadius: 10,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 4,
      height: 100,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    text: {
      fontSize: 14,
      color: 'white',
      marginLeft: 20,
      marginTop: 15,
      marginBottom: 10
    },
    amount: {
      fontSize: 25,
      color: 'white',
      marginLeft: 20,
      marginTop: 10,
    },
    history: {
      fontSize: 14,
      color: 'white',
      marginRight: 20,
      marginTop: 15,
      marginBottom: 10
    },
    addmoney: {
      fontSize: 13,
      color: Colors.primary,
    },
    addmoneyWrap: {
      backgroundColor: 'white',
      borderRadius: 16,
      height: 30,
      width: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 30,
      marginTop: 10,
    },
    transactionsList: {
      width: '90%',
      paddingHorizontal: 20,
      marginLeft: 20,
      paddingTop: 10,
      backgroundColor: 'white',
      borderRadius: 10,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 4,
    },
    transactionCard: {
      marginBottom: 10,
      borderRadius: 8,
      padding: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    transactionDetails: {
      flex: 1,
    },
    transactionStatus_amount: {
      alignItems: 'flex-end',
    },
    transactionDescription: {
      fontSize: 14,
      color: '#333',
    },
    transactionDate: {
      fontSize: 12,
      color: '#666',
      marginTop: 5,
    },
    transactionAmount: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
    },
    transactionStatus: {
      fontSize: 12,
      marginTop: 5,
      textAlign: 'right',
    },
    completedStatus: {
      color: 'green',
    },
    pendingStatus: {
      color: 'orange',
    },
    failedStatus: {
      color: 'red',
    },
    actionWrap:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
    }
  });