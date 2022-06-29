import * as React from 'react';
import { Text, View, StyleSheet, Button, TextInput, TouchableHighlight } from 'react-native';
import {useState }from "react";
//import Estilo from './src/style';
let notafinal

export default () => {
const [nota1, nota1SetNumero] = useState('');
const [nota2, nota2SetNumero] = useState('');
const [nota3, nota3SetNumero] = useState('');
const [nota4, nota4SetNumero] = useState('');
const [notafinal2, finalsetNumero] = useState('');
const [mediaFinal, mediaFinalSetNumero] = useState('');

function result (){
  let n1 = parseFloat(nota1)
  let n2 = parseFloat(nota2)
  let n3 = parseFloat(nota3)
  let n4 = parseFloat(nota4)
  if( nota1.length == 0 ){
      return
    }
//mediaFinalSetNumero (parseFloat(nota1 * 2 + nota2 * 2 + nota3 * 3 + nota4 * 3) / 10);
  if( nota2.length == 0 ){
    notafinal = (((300 - (n1*2))/2)) 
    finalsetNumero(notafinal)
  }  
    if (nota1.length != 0 && nota2.length != 0 && nota3.length != 0 && nota4.length != 0){
      notafinal = (((n1 * 2) + (n2 * 2) + (n3 * 3) + (n4 * 3)) / 10)
      if(notafinal < 50){
        return alert('Burro')
      } 
      mediaFinalSetNumero(notafinal), alert ('Arrasou')
      
    }
  }    


return (
  <View>
    <View>
      <Text>Calculadora Medio</Text>
    </View>
    <View>
      <Text>Digite a nota:</Text>
      <TextInput placeholder='Nota 1' onChangeText={nota1SetNumero}/>
      <Text>Digite a nota:</Text>
      <TextInput placeholder='Nota 2' onChangeText={nota2SetNumero}/>
      <Text>Digite a nota:</Text>
      <TextInput placeholder='Nota 3' onChangeText={nota3SetNumero}/>
      <Text>Digite a nota:</Text>
      <TextInput placeholder='Nota 4' onChangeText={nota4SetNumero}/>
      
      <TextInput placeholder='falta' value={notafinal2} onChangeText={finalsetNumero} />
        
        <Button title="Calcular" onPress={() => {result()}} />

    </View>
    <Text>Resultado: {mediaFinal}</Text>
  </View>
  );
}

