import Colors from '@/constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';


const Layout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors.primary,
                tabBarStyle: {
                    backgroundColor: 'transparent',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    borderTopWidth: 0,
                },
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ size, color }) => (
                        <FontAwesome name="registered" size={size} color={color} />
                    ),
                    headerTransparent: true,
                }}
            />
            <Tabs.Screen
                name="deposit"
                options={{
                    title: 'payments',
                    tabBarIcon: ({ size, color }) => (
                        <FontAwesome name="line-chart" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="payments"
                options={{
                    title: 'Transfers',
                    tabBarIcon: ({ size, color }) => (
                        <FontAwesome name="exchange" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="me"
                options={{
                    title: 'Crypto',
                    tabBarIcon: ({ size, color }) => <FontAwesome name="bitcoin" size={size} color={color} />,
                    // header: () => <CustomHeader />,
                    headerTransparent: true,
                }}
            />
        </Tabs>
    )
}

export default Layout