import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './components/Home'
import CalcMedioTecnico from  './components/CalcMedioTecnico'
import CalcSuperior from  './components/CalcSuperior'
import Sobre from './components/Sobre'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName='Home' >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='CalcMedioTecnico' component={CalcMedioTecnico} />
        <Stack.Screen name='CalcSuperior' component={CalcSuperior} />
        <Stack.Screen name='Sobre' component={Sobre} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
