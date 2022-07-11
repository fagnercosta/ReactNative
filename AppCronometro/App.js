import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TimePickerAndroid } from 'react-native';
import React, {useState} from 'react';


let timer = null;
let segundo = 0;
let minuto = 0;
let hora = 0;

export default function App() {

  const [numero,setNumero] = useState(0);
  const [botao,setBotao] = useState('Iniciar');
  const [ultimo, setUltimo] = useState(null)

 
  function iniciar(){
      if(timer !== null){
        //Parar o Timer
        console.log('Parando....')
        clearInterval(timer);
        timer = null;
        setBotao('Iniciar')
      }else{
        // Iniciar timer..

        setBotao('Parar')

        timer = setInterval(()=>{
            segundo++;

            if(segundo===60){
                segundo = 0;
                minuto++;
            }

            if(minuto ===60){
              hora ++;
            }

            let format = (hora < 10 ? '0'+hora  : hora) + ':' + 
                         (minuto < 10 ? '0'+minuto  : minuto) + ':'+
                         (segundo<10 ? '0'+segundo: segundo);

            setNumero(format);
        },1000);
      }
  }

  function reiniciar(){
      if(timer !== null){
          clearInterval(timer);
          timer = null;
      }

      setUltimo(numero);
      segundo = 0;
      minuto = 0;
      hora = 0;
      setNumero(0);
      setBotao('Iniciar');
    
  }

  return (
    <View style={styles.container}>
      
      <Image source={require('./src/img/crono.png')}/>

      <Text style={styles.timer}>
        {numero}
      </Text>

      <View style={styles.botaoArea}>

          <TouchableOpacity style={styles.botao} onPress={iniciar}>
              <Text style={styles.botaoText}>{botao}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={reiniciar}>
              <Text style={styles.botaoText}>Zerar</Text>
          </TouchableOpacity>

      </View>


      <View style={styles.areaUltima}>
        
          <Text style={styles.textoCorrido}> 
              {ultimo ? `Ultimo tempo:${ultimo}` : null}
          </Text>
      </View>
      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'black'
  },
  timer:{
    marginTop: -160,
    fontSize:45,
    fontWeight:'bold',
    color:'#FFF'
  },

  botaoArea:{
    
    flexDirection:'row',
    marginTop:130,
    height:40
  },
  botao:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'blueviolet',
    margin:18,
    height:40,
    borderRadius:8

  },
  botaoText:{
    fontSize:20,
    fontWeight:'bold',
    color:'#FFF'
  },
  areaUltima:{
    marginTop:40
  },
  textoCorrido:{
    fontSize:25,
    color: '#FFFF'
  }
});
