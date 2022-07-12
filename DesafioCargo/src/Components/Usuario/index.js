
import React from "react";
import { View, Text, StyleSheet } from 'react-native';

function Usuario(props){

    return(
        <View style={style.area}>
            <Text style={style.textoArea}>{`Nome: ${props.nome}`}</Text>
            <Text style={style.textoArea}>{`Cargo: ${props.cargo}`}</Text>
        </View>
    );

}

const style = StyleSheet.create({
  area:{
    backgroundColor:'blueviolet',
    height: 200,
    justifyContent: 'center',
    marginTop: 10,
    padding: 15,
    borderRadius:5,
    marginRight:3,
    marginLeft:3
   },
   textoArea:{
     color: '#FFF',
     fontSize: 25
   }
});

export default Usuario;