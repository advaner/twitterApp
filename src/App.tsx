import 'react-native-gesture-handler';

import React from "react"
import { StatusBar, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import Routes from "./routes/routes"

const App = () => {
  return (
    <NavigationContainer>
        <StatusBar/>
        <View style={{flex: 1}}>
            <Routes/>
        </View>
    </NavigationContainer>
  );
};
export default App; 