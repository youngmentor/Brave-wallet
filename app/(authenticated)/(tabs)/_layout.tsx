import CustomHeader from '@/components/header';
import Colors from '@/constants/Colors';
import { AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { Tabs, useRouter } from 'expo-router';
import { View, TouchableOpacity } from 'react-native';

const Layout = () => {
    const router= useRouter()

    
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
                        <AntDesign name="home" size={size} color={color} />
                    ),
                    header: () => (
                        <CustomHeader
                            title=""
                            headerLeft={
                                <TouchableOpacity onPress={() => console.log('Menu pressed')}>
                                    <MaterialIcons name="menu" size={24} color="black" />
                                </TouchableOpacity>
                            }
                            headerRight={
                                <TouchableOpacity onPress={() => console.log('Search pressed')}>
                                    <AntDesign name="search1" size={24} color="black" />
                                </TouchableOpacity>
                            }
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="deposit"
                options={{
                    title: 'Deposit',
                    tabBarIcon: ({ size, color }) => (
                        <FontAwesome name="line-chart" size={size} color={color} />
                    ),
                    header: () => (
                        <CustomHeader
                            title="Add Money"
                            headerLeft={
                                <TouchableOpacity onPress={router.back}>
                                    <AntDesign name="arrowleft" size={24} color="black" />
                                </TouchableOpacity>
                            }
                            headerRight={
                                <TouchableOpacity onPress={() => console.log('Help pressed')}>
                                    <FontAwesome name="question-circle" size={24} color="black" />
                                </TouchableOpacity>
                            }
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="payments"
                options={{
                    title: 'Trnasfer',
                    tabBarIcon: ({ size, color }) => (
                        <FontAwesome name="exchange" size={size} color={color} />
                    ),
                    header: () => (
                        <CustomHeader
                            title=""
                            headerLeft={
                                <TouchableOpacity onPress={() => console.log('Filter pressed')}>
                                    <MaterialIcons name="filter-list" size={24} color="black" />
                                </TouchableOpacity>
                            }
                            headerRight={
                                <TouchableOpacity onPress={() => console.log('Settings pressed')}>
                                    <AntDesign name="setting" size={24} color="black" />
                                </TouchableOpacity>
                            }
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="me"
                options={{
                    title: 'Me',
                    tabBarIcon: ({ size, color }) => (
                        <AntDesign name="setting" size={size} color={color} />
                    ),
                    header: () => (
                        <CustomHeader
                            title="Me"
                            headerLeft={
                                <TouchableOpacity onPress={() => console.log('Profile pressed')}>
                                    <FontAwesome name="user-circle" size={24} color="black" />
                                </TouchableOpacity>
                            }
                            headerRight={
                                <TouchableOpacity onPress={() => console.log('Logout pressed')}>
                                    <MaterialIcons name="logout" size={24} color="black" />
                                </TouchableOpacity>
                            }
                        />
                    ),
                }}
            />
        </Tabs>
    );
};

export default Layout;
