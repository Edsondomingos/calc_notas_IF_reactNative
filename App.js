import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './components/Home'
import CalcMedioTecnico from  './components/CalcMedioTecnico'
import CalcSuperior from  './components/CalcSuperior'
import Sobre from './components/Sobre'

export default function App() {
  return (
    <CalcMedioTecnico />
    // <Home />
    // <NavigationContainer>
    //   <Stack.Navigator  initialRouteName='Home' screenOptions={{headerShown: false}}>
    //     <Stack.Screen name='Home' component={Home} />
    //     <Stack.Screen name='CalcSuperior' component={CalcSuperior} />
    //     <Stack.Screen name='Sobre' component={Sobre} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}
