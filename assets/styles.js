import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '',
  },
  opcao:{
    width: 200,
    height: 40,
    marginVertical: 30,
    margin: 'auto',
    backgroundColor: '#88f',
    borderRadius: 20,
    padding: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoOpcao:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  titulo:{
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'Cursive',
    fontWeight: 'bolder',
    marginVertical: 20,
  },
  ContainerNotas:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoNotas:{
    textAlign: 'center', 
    fontSize: 20,

  },
  input:{
    outline: 0,
    borderWidth: 1,
    marginBottom: 20,
    width: 200,
    margin: 'auto',
    padding: 5,
    borderRadius: 7,
  },
  btCalcular:{    
    backgroundColor: '#21AEEF',
    width: 200,
    height: 40,
    borderRadius: 20,
  },
  textoBt:{
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff'
  },
})