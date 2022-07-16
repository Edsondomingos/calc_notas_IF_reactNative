import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  opcao:{
    width: 200,
    height: 70,
    marginVertical: 30,
    margin: 'auto',
    backgroundColor: '#f05',
    borderBottomEndRadius: 20,
    borderTopEndRadius: 20,
    padding: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoOpcao:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'Cursive'
  },
  titulo:{
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'Cursive',
    fontWeight: 'bold',
    marginVertical: 20,
  },
  ContainerNotas:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  textoNotas:{
    textAlign: 'center', 
    fontSize: 20,

  },
  input:{
    //outline: 0,
    borderWidth: 1,
    marginBottom: 20,
    width: 200,
    margin: 'auto',
    padding: 5,
    borderRadius: 7,
  },
  botoes:{
    flexDirection: 'row',
  },
  btCalcular:{    
    backgroundColor: '#21AEEF',
    width: 120,
    height: 45,
    borderRadius: 20,
    marginVertical: 20,
    marginHorizontal: 10
  },
  textoBt:{
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff'
  },
  resultado:{
    color: '#f00',
    fontSize: 25,
    marginVertical: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  logo:{
    marginHorizontal:'auto',
  },
})