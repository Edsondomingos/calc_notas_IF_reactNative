import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableHighlight } from 'react-native';
import Styles from '../assets/styles'

let finall

export default function CalcSuperior(){
  const [nota1, setNota1] = useState('')
  const [nota2, setNota2] = useState('')
  const [final, setFinal] = useState()
  const [resultado, setResultado] = useState()
  
  const Calcular = () => {
    let n1 = parseFloat(nota1)
    let n2 = parseFloat(nota2)
    if(nota1.length == 0){
      setResultado('Digite pelo menos a primeira nota')
    }
    if(nota1.length != 0 && nota2.length == 0){
      // finall = (((n1 * 2)/60)*3)*5
      // finall = (((300 - n1)/3)/2)
      finall = (((300 - (n1*2))/3))
      setNota2(finall)
    } 
    if (nota1.length != 0 && nota2.length != 0){
      finall = ((n1 * 2) + (n2 * 3)) / 5
      if(finall < 60){
        if(nota1 > nota2){
          finall = (((300 - (n1*2))/3))
          setFinal(finall)
        } else if(nota2 > nota1){
          finall = (((300 - (n2*3))/2))
          setFinal(finall)
        }
      }
      // setResultado(finall)
    }
    
  }


  return (
    <View>
        <Text style={Styles.titulo}>Calculadora de Notas cursos Superiores</Text>
        <View style={Styles.ContainerNotas}>
          <Text style={Styles.textoNotas}>N1</Text>
          <TextInput 
            style={Styles.input}
            placeholder='Digite a primeira nota'
            value={nota1}
            onChangeText={setNota1}
          />

          <Text style={Styles.textoNotas}>N2</Text>
          <TextInput 
             style={Styles.input}
             placeholder='Digite a segunda nota'
             value={nota2}
             onChangeText={setNota2}
          />

          <Text style={Styles.textoNotas}>FINAL</Text>
          <TextInput 
             style={Styles.input}
             value={final}
             onChangeText={setFinal}
          />

          <TouchableHighlight 
            style={Styles.btCalcular}
            onPress={() => Calcular()}
          >
            <Text style={Styles.textoBt}>Calcular</Text>
          </TouchableHighlight>

          <Text>{resultado}</Text>
        
        </View>
    </View>
  )
}