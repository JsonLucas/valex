import React from "react";
import Login from "../components/Home/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import SignUp from "../components/Home/SignUp";
import Cards from "../components/Cards";

const BottomTabs = createBottomTabNavigator();
const header = () => <></>;

export default function ScreenNavigations() {
    return (
        <NavigationContainer>
            <BottomTabs.Navigator screenOptions={{
                tabBarActiveTintColor: '#B0C4DE',
                tabBarInactiveTintColor: '#4682B4',
                tabBarItemStyle: { backgroundColor: 'transparent' },
                tabBarLabelStyle: { fontWeight: 'bold', fontSize: 12, color: 'white' }
            }}>
                <BottomTabs.Screen name='Cards' component={Cards}
                    options={{
                        header, tabBarIcon: ({ size, color }) => (
                            <Ionicons name="home" size={size} color={color} />)
                    }}
                />
                <BottomTabs.Screen name='Login' component={Login} options={{ header, tabBarStyle: { display: 'none' } }} />
                <BottomTabs.Screen name='SignUp' component={SignUp} options={{ header, tabBarStyle: { display: 'none' } }} />
            </BottomTabs.Navigator>
        </NavigationContainer>
    )
}
