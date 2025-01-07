import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '@/constants/Colors';

interface CustomHeaderProps {
    title: string;
    headerLeft?: React.ReactNode;
    headerRight?: React.ReactNode;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ title, headerLeft, headerRight }) => {
    return (
        <View style={styles.container}>
            <View style={styles.side}>{headerLeft}</View>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.side}>{headerRight}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 80,
        backgroundColor: Colors.background,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 40,
        paddingHorizontal: 10,
    },
    title: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'light',
        textAlign: 'center',
        flex: 1,
    },
    side: {
        width: 50,
        alignItems: 'center',
    },
});

export default CustomHeader;
