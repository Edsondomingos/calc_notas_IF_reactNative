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
    let n1 = nota1
    let n2 = nota2
    if(nota1.length == 0){
      setResultado('Digite pelo menos a primeira nota')
    }
    if(nota1.length != 0 && nota2.length == 0){
      finall = (((300 - (n1*2))/3))
      setNota2(finall.toFixed(2))
      setResultado(`
      Calculo da média \n(${nota1.toFixed(2)} + ${finall.toFixed(2)}) / 5 = 60`)
    } 
    if (nota1.length != 0 && nota2.length != 0){
      finall = ((n1 * 2) + (n2 * 3)) / 5
      if(finall > 20 && finall < 60){
        if(nota1 > nota2){
          finall = (((300 - (n1*2))/3))
          setFinal(finall.toFixed(2))
          setResultado(`
          Voce precisa tirar: \n ${finall.toFixed(2)} na prova final`)
        } else if(nota2 > nota1){
          finall = (((300 - (n2*3))/2))
          setFinal(finall)
          setResultado(`
          Voce precisa tirar: \n ${finall.toFixed(2)} para ser aprovado`)
        } else {
          setResultado(`Você precisa tirar:\n ${120-finall.toFixed(2)} na prova final`)
        }
      } else if(finall < 20){
        setResultado(`Reprovado por média: ${finall.toFixed(2)}`)
      } else if(finall >= 60){
      setResultado(`APROVADO \nSua média foi: ${finall.toFixed(2)}`)
      }
    }
    
  }

  function Limpar(){
    setNota1('')
    setNota2('')
    setFinal('')
    setResultado('')
  }


  return (
    <View style={Styles.container}>
        <Text style={Styles.titulo}>Calculadora de Notas cursos Superiores</Text>
        <View style={Styles.ContainerNotas}>
          <Text style={Styles.textoNotas}>N1</Text>
          <TextInput 
            style={Styles.input}
            placeholder='Digite a primeira nota'
            value={nota1}
            onChangeText={setNota1}
            testID='inputN1'
          />

          <Text style={Styles.textoNotas}>N2</Text>
          <TextInput 
             style={Styles.input}
             placeholder='Digite a segunda nota'
             value={nota2}
             onChangeText={setNota2}
             testID='inputN2'
          />

          <Text style={Styles.textoNotas}>FINAL</Text>
          <TextInput 
             style={Styles.input}
             value={final}
             onChangeText={setFinal}
             testID='inputFinal'
          />

          <View style={Styles.botoes}>
            <TouchableHighlight 
                style={Styles.btCalcular}
                onPress={() => Limpar()}
                testID='btnLimpar'
              >
                <Text style={Styles.textoBt}>Limpar</Text>
              </TouchableHighlight>

              <TouchableHighlight 
                style={Styles.btCalcular}
                onPress={() => Calcular()}
                testID='btnCalcular'
              >
                <Text style={Styles.textoBt}>Calcular</Text>
              </TouchableHighlight>

            
          </View>
          <Text style={Styles.resultado} testID='resultado'>{resultado}</Text>
        
        </View>
    </View>
  )
}