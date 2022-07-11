
import React, {useState} from 'react';

import { StyleSheet, Text, View,Image, TouchableOpacity, StatusBar } from 'react-native';

 function App() {

  const imageInitial = './src/img/biscoito.png';
  const imageBiscoitoQuebrado = './src/img/biscoitoAberto.png'
  const titiloApp = 'App Biscoito';

  const [img, setImg] = useState(require(imageInitial));

  const [textoFrase, setTextoFrase]=useState('');


  let frases = [
    'Siga os bons e aprenda com eles.', 
    'O bom-senso vale mais do que muito conhecimento.', 
    'O riso é a menor distância entre duas pessoas.', 
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.'
  ];

  //Funções

  function quebrarBiscoito(){
      let numeroAleatorio = Math.floor(Math.random() * frases.length);

      setTextoFrase(`" ${frases[numeroAleatorio]}"`);

      setImg(require(imageBiscoitoQuebrado));
  }

  function reiniciarBiscoito(){
      setImg(require(imageInitial));
      setTextoFrase('');
  }

  return (
    
    <>
    
    
    <View style={styles.container}>
    <StatusBar></StatusBar>
      
      <View style={styles.cabecalho}>
          <Text style={styles.textoCabecalho}> {titiloApp}</Text>
          <Image style={styles.logo} source={require('./src/img/logo.png')}/>
      </View>

      
      
     
      <View style={styles.conteudo}>


          <Image
              source={img}
              style={styles.img}
          />

          <Text style={styles.textoFrase}> 
              {textoFrase} 
          </Text>

          <TouchableOpacity style={styles.botao} onPress={quebrarBiscoito}>
              <View style={styles.botaoArea}>
                  <Text style={styles.botaoTexto}>Quebrar Biscoito</Text>
              </View>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.botao,styles.botaoRestart]} onPress={reiniciarBiscoito}>
              <View style={styles.botaoArea}>
                  <Text style={[styles.botaoTexto,{color:'#FFFF'}]}>Reiniciar Biscoito</Text>
              </View>
          </TouchableOpacity>
      </View>


    </View>
    </>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
  img:{
    width: 230,
    height: 230
  },
  textoFrase:{
      fontSize:20,
      color: '#DD7B22',
      margin:30,
      textAlign:'center'
  },
  botao:{
      width:230,
      height:50,
      backgroundColor:'#DD7B22',
     
      borderRadius:25
  },

  botaoRestart:{
    marginTop:15,
    borderColor:'#121212',
    backgroundColor:'#FF4500'

  },
  botaoArea:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
  },
  botaoTexto:{
      fontSize:18,
      fontWeight:'bold',
      color:'#FFF'
  },

  cabecalho:{
    height:100,
   
    flexDirection:'row',
    backgroundColor:'#FA8072',
    justifyContent: 'space-between',
    alignItems:'center'
  

  },
  textoCabecalho:{
    
    marginLeft:10,
    fontSize:30,
    fontStyle:'bold',
    fontFamily:'Roboto',
    color: '#FFF',
    marginRight:10
    
  },
  conteudo:{
      flex:10,
      alignItems: 'center',
      justifyContent: 'center',
  },

  logo:{
    width: 60,
    height:60,
    marginRight:10
  }

});

export default App;
