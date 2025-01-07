import Colors from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const depositStyles = StyleSheet.create({
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
    accountdetailsWrap:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        padding: 10
    },
    accountdetails:{
        width: 40,
        height: 40,
        backgroundColor: Colors.lightGray,
        display: 'flex',
        alignItems: 'center',
        gap: 5,
        justifyContent: 'center',
        borderRadius:8,
    },
    accountdetailsText:{
        fontSize: 18,
    },
    accountdetailsText2: {
      fontSize: 12,
    },
  });