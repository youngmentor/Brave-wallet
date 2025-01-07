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
        height: 270,
        display: 'flex',
        flexDirection: 'row',
    },
    text: {
        fontSize: 14,
        color: 'black',
        marginLeft: 20,
        marginTop: 15,
        marginBottom: 10,
        width: '100%'
    },
    accountdetailsWrap: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        padding: 10
    },
    accountdetails: {
        width: 50,
        height: 50,
        backgroundColor: Colors.lightGray,
        display: 'flex',
        alignItems: 'center',
        gap: 5,
        justifyContent: 'center',
        borderRadius: 8,
    },
    accountdetailsText: {
        fontSize: 18,
    },
    accountdetailsText2: {
        fontSize: 12,
    },
    description: {
        fontSize: 14,
        color: '#777',
    },
    dashedLine: {
        height: 1,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#ccc',
        width: '90%',
        marginVertical: 16,
        marginLeft: 15
    },
    accountDetails: {
        alignItems: 'center',
    },
    accountNumber: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 16,
        width: '90%',
    },
    buttonContainer: {
          width: '90%',
        flexDirection: 'row',
        gap: 16,
    },
    copyButton: {
        backgroundColor: Colors.primaryMuted,
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 25,
    },
    shareButton: {
        backgroundColor: Colors.primary,
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 25,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },

});