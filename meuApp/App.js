/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React,{useState} from 'react';
 import {View, Text,TextInput, Button, StatusBar,StyleSheet} from 'react-native';


 function App() {

      const [nome, setNome] = useState('');
      const [input, setInput] = useState();

      function entrar(){
          if(input==='')
              alert('Digite seu nome..')
          else{
            setNome(`Bem Vindo, ${input}`)
          }
      }


      
      
    


      return(

        
        <View style={styles.container}>
          <StatusBar></StatusBar>
    
          

          <TextInput
              style={styles.input}
              placeholder="Digite seu nome"
              onChangeText={(texto)=> setInput(texto)}
          />

          <Button  
              style={styles.botao} 
             
              title='Entrar'
              onPress={entrar}
          />

          

          <Text  style={styles.texto}> {nome} </Text>
         
         

        </View>
      );
 }

 const styles = StyleSheet.create({
      container:{
        flex: 1,
        backgroundColor: 'rgb(157, 43, 226)'
      },
      input :{
          height:45,
          padding:10,
          borderRadius:4,
          margin:8,
          backgroundColor:'#FFF'
      },
     

      texto :{
        textAlign:'center',
        fontSize:18

      }

 });




export default App;
