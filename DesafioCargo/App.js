
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import Pessoa from './src/Components/Usuario';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem Vindo!</Text>
      <Pessoa nome="Fagner Costa" cargo="Programador"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09090b',
    
    
    
  },

  titulo:{
     height: 40,
     textAlign:'center',
     fontWeight:'bold',
     fontSize:20,
     color:'#FFFFFF',
     marginTop:25

       
  }
});
