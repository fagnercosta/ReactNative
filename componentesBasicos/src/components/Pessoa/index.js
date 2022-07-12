import React,{useState} from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList,Image } from 'react-native';

function Pessoa(props){
  return(
      <View style={styles.areaPessoa}>
          <View>

              <Text style={styles.textoFeed}> {props.data.nome} </Text>
              <Text style={styles.textoFeed}> {props.data.idade} </Text>
              <Text style={styles.textoFeed}> {props.data.email} </Text>
          </View>

          <Image source={{uri:props.data.avatar}} style={styles.avatar}/>
          
      </View>
  );
}


const styles = StyleSheet.create({
  areaPessoa:{
    backgroundColor: '#777777',
    height:150, 
    marginBottom:15,
    marginRight:5,
    marginLeft:5,
    justifyContent:'space-around',
    alignItems:'center',
    borderRadius:4, 
    flexDirection:'row'
  },
  textoFeed:{
     color: '#FFFF',
     fontSize:20,
     marginRight:4
     
  },
  avatar:{
    height:100,
    width:100, 
    borderRadius:50
  }
});

export default Pessoa;