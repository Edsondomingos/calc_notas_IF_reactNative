import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, TouchableHighlight, Image } from 'react-native';
import Styles from '../assets/styles'

export default function Home(props){
  return (
    <View style={Styles.container}>
      <Image source={require('../assets/if.png')}  style={Styles.logo} />
      <Text style={Styles.titulo}>Calculadora de notas</Text>
      <TouchableHighlight
        style={Styles.opcao}
        onPress={() => props.navigation.navigate('CalcMedioTecnico')}
      >
        <Text style={Styles.textoOpcao}>Médio➗Técnico</Text>
        
      </TouchableHighlight>

      <TouchableHighlight
        style={Styles.opcao}
        onPress={() => props.navigation.navigate('CalcSuperior')}
      >
        <Text style={Styles.textoOpcao}>➕Superior</Text>
      </TouchableHighlight>
      
      <TouchableHighlight
        style={Styles.opcao}
        onPress={() => props.navigation.navigate('Sobre')}
      >
        <Text style={Styles.textoOpcao}>❕Sobre</Text>
      </TouchableHighlight>
      
    </View>
  )
}