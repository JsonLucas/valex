import React from "react";
import Login from "../components/Home/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from "../components/Home/SignUp";

const Stack = createNativeStackNavigator();

export default function ScreenNavigations() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Login' component={Login} options={{header: () => <></>}}/>
                <Stack.Screen name='SignUp' component={SignUp} options={{header: () => <></>}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
