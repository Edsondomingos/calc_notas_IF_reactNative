import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import Styles from '../assets/Styles'

export default function Home(){
  return (
    <View style={Styles.container}>
      <TouchableHighlight
        style={Styles.opcao}
        onPress={() => console}
      >
        <Text style={Styles.textoOpcao}>Médio/Técnico</Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={Styles.opcao}
        onPress={() => console}
      >
        <Text style={Styles.textoOpcao}>Superior</Text>
      </TouchableHighlight>
      
      <TouchableHighlight
        style={Styles.opcao}
        onPress={() => console}
      >
        <Text style={Styles.textoOpcao}>Sobre</Text>
      </TouchableHighlight>
    </View>
  )
}