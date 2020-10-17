import React from "react"

import { createStackNavigator } from '@react-navigation/stack';

import SignUp from "../pages/SignUp/signup"
import SignIn from "../pages/SignIn/signin"
import Home from "../pages/Home/home"


const Stack = createStackNavigator();

const Routes: React.FC = () => {
    return(
        <Stack.Navigator initialRouteName={"SignUp"} screenOptions={{
            headerShown: false,
        }}>

            <Stack.Screen name="SignIn" component={SignIn}/>
            <Stack.Screen name="SignUp" component={SignUp}/>
            <Stack.Screen name="Home" component={Home}/>


        </Stack.Navigator>
    )
}

export default Routes