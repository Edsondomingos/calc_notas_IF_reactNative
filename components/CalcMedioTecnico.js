import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableHighlight, ScrollView } from 'react-native';
import Styles from '../assets/styles'

let finall
let media
let media1
let media2
let mediaFinal
let mdf1
let mdf2
let mdf3

export default function CalcSuperior(){
  const [nota1, setNota1] = useState('')
  const [nota2, setNota2] = useState('')
  const [nota3, setNota3] = useState('')
  const [nota4, setNota4] = useState('')
  const [final, setFinal] = useState('')
  const [resultado, setResultado] = useState()
  
  const Calcular = () => {
    let n1 = nota1
    let n2 = nota2
    let n3 = nota3
    let n4 = nota4
    media1 = ((n1 * 2) + (n2 * 2)) 
    // media1 = (240 - (nota1*2))/2 
    // Se estiver sem nota1
    if(nota1.length == 0){
      setResultado('Digite pelo menos a primeira nota')
    } //else {    
      // Se estiver apenas coma primeira nota
      if(nota1.length != 0 && nota2.length == 0 &&
        nota3.length == 0 && nota4.length == 0
      ){        
        setNota2((240 - (nota1*2))/2)
        // setNota3(400/6*3)
        setNota3(60)
        // setNota3(((media1)*3)) 
        // 1000/10*3-media1
        // ((n1*2 + n2*2)/10)*3
        // setNota3((((400 - media1)/60)*3))
        setNota4(((360 - (nota3*3))/3)/2)
        // if(nota3.length == 0 && nota4.length == 0){

        // }
      } else if(nota1.length != 0 && nota2.length != 0 &&
        nota3.length == 0 && nota4.length == 0){
          setNota3(((media1*4) - 360)/10)
          setNota4(((360 - (nota3*3))/3)/2)
      } else if(nota1.length != 0 && nota2.length != 0 &&
        nota3.length != 0 && nota4.length == 0){
          setNota4(((360 - (nota3*3))/3)/2)
          // setNota4((((400- (media1+nota3))*3)/10)*2)
      }

       if (nota1.length != 0 && nota2.length != 0 &&
          nota3.length != 0 && nota4.length != 0){
          
          media2 = ((nota3 * 3) + (nota4 *3)) 
          mediaFinal = (media1 + media2) / 10
          // mediaFinal = ((n1 * 2) + (n2 * 2) + (nota3 * 3) + (nota4 *3)) /10
        if(mediaFinal > 20 && mediaFinal < 60){
          if(media1 < 60){
            // finall = (((300 - (n1*2))/3))
            // setFinal(finall)
            media2
            mdf2 = ('NAF'*2 + (media2 * 3)) / 10
            setResultado('Aprovado com media: '+ mdf2)
          } else if(media2 < 60){
            mdf3 = ((2 * media1) + (3 * 'NAF')) / 10
            setResultado('Aprovado com media: '+ mdf3)
          } else {
            mdf1 = (mediaFinal + 'NAF') / 2
            setResultado('Aprovado com media: '+ mdf1)
          }
          setFinal(mediaFinal)
          setResultado()
        } else if(mediaFinal < 20){
          setResultado('Reprovado por media: '+ mediaFinal)
          setFinal()
        } else {
          setResultado('Aprovado com media: '+ mediaFinal)
          setFinal()
        }      
      }
      // setResultado((((media2*3)-720)/2))
    //}
  }

  function Limpar(){
    setNota1('')
    setNota2('')
    setNota3('')
    setNota4('')
    setFinal('')
    setResultado('')
  }

  return (
    <View style={Styles.container} testID='teste1'>
      <ScrollView>
        <Text style={Styles.titulo}>Calculadora de Notas Medio/Técnico</Text>

        
        <Text testID='btn'>{resultado}</Text>

        <View style={Styles.ContainerNotas} testID='btn1'>
          <Text style={Styles.textoNotas} testID='btn2'>N1</Text>
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

          <Text style={Styles.textoNotas}>N3</Text>
          <TextInput 
             style={Styles.input}
             placeholder='Digite a terceira nota'
             value={nota3}
             onChangeText={setNota3}
          />

          <Text style={Styles.textoNotas}>N4</Text>
          <TextInput 
             style={Styles.input}
             placeholder='Digite a quarta nota'
             value={nota4}
             onChangeText={setNota4}
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
            testID='teste2'
          >
            <Text style={Styles.textoBt}>Calcular</Text>
          </TouchableHighlight>

          <TouchableHighlight 
            style={Styles.btCalcular}
            onPress={() => Limpar()} 
            testID='teste3'
          >
            <Text style={Styles.textoBt}>Limpar</Text>
          </TouchableHighlight>

          <Text>{resultado}</Text>
        
        </View>
        </ScrollView>
    </View>
  )
}