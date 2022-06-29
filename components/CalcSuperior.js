import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableHighlight } from 'react-native';
import Styles from '../assets/Styles'

let finall

export default function CalcSuperior(){
  const [nota1, setNota1] = useState()
  const [nota2, setNota2] = useState()
  const [final, setFinal] = useState()
  const [resultado, setResultado] = useState()
  // setFinal('')
  const Calcular = () => {
    let n1 = parseFloat(nota1)
    let n2 = parseFloat(nota2)
    if(nota1 != '' && nota2 == ''){
      finall = (((n1 * 2)/60)*3)*5
      setNota2(finall)
    } 
    if (nota1 != '' && nota2 != ''){
      finall = ((n1 * 2) + (n2 * 3)) / 5
      setResultado(finall)
    }
    
  }


  return (
    <View>
        <Text style={Styles.titulo}>Notas cursos Superior</Text>
        <Text onPress={() => console}>{typeof nota1}</Text>
        <View style={Styles.ContainerNotas}>
          <Text style={Styles.textoNotas}>Nota 1</Text>
          <TextInput 
            style={Styles.input}
            placeholder='Digite a primeira nota'
            value={nota1}
            onChangeText={() => setNota1(nota1)}
          />

          <Text style={Styles.textoNotas}>Nota 2</Text>
          <TextInput 
             style={Styles.input}
             placeholder='Digite a segunda nota'
             value={nota2}
             onChangeText={() => setNota2(nota2)}
          />

          <Text style={Styles.textoNotas}>Nota Final</Text>
          <TextInput 
             style={Styles.input}
             value={final}
             onChangeText={() => setFinal(final)}
          />

          <Text>Media: {resultado}</Text>

          <TouchableHighlight 
            style={Styles.btCalcular}
            onPress={() => Calcular()}
          >
            <Text style={Styles.textoBt}>Calcular</Text>
          </TouchableHighlight>
        
        </View>
    </View>
  )
}