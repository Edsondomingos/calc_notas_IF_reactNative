import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CalcSuperior from  './components/CalcSuperior'
import Home from './components/Home'

export default function App() {
  return (
    // <CalcSuperior />
    <NavigationContainer>
      <Stack.Navigator  initialRouteName='Home' screenOptions={{headerShown: false}}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='CalcSuperior' component={CalcSuperior} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
