import * as React from 'react';
//import { useState } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import Styles from '../assets/styleSobre'

export default function Sobre(){
  return (
    <View style={Styles.container} testID='btnview' >
      <Text style={Styles.texto}>Bem vindo a calculadora de notas do IFRN</Text>
            <Text>para o calculo, usa-se média ponderada. </Text>
            <Text style={Styles.texto}>Caso esteja no ensino medio ou tecnico, possuindo 4 notas, a duas primeiras notas tem peso 2 e as duas ultimas peso 3. Com a soma das notas depois do calculo do peso, dividido pelo peso total, que no caso seria a soma de todos os pesos, resultando em 10, ou seja:
      </Text>
            
      <Text style={Styles.texto}>((B1 * 2) + (B2 * 2) + (B3 * 3) + (B4 * 3)) / 10</Text>

      <Text style={Styles.texto}>
            Para os cursos superiores, segue a mesma lógica, mas com apenas duas notas bimestrais, com peso total de 5, ou seja:
      </Text>

        <Text style={Styles.texto}>((B1 * 2) + (B2 * 3)) / 5 </Text>
      
    </View>
  )
}