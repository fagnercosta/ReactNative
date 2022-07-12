
import React,{useState} from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList,Image } from 'react-native';
import Pessoa from './src/components/Pessoa';

export default function App() {


  const [feed,setFeed] = useState([
      {id:'1', nome:'Fagner', idade:50, email:'fagner.ufpa@gmail.com',avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCFPzl82MfhKv1jK6j5n_wCHdrzcZEOChB7Q&usqp=CAU'},
      {id:'2', nome:'André', idade:50, email:'fagner.ufpa@gmail.com',avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbqM7NkGfhpKRhSKhHra4BZ5iuKylZpfU69Q&usqp=CAU'},
      {id:'3', nome:'João', idade:50, email:'fagner.ufpa@gmail.com',avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHgnXMrevgPN2YauqSbNkcnAjpg3kvXqZLbA&usqp=CAU'},
      {id:'4', nome:'Maria', idade:50, email:'fagner.ufpa@gmail.com',avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYI8eM2_t9kJGo29g35hF-EKnwMlyDauqJOw&usqp=CAU'},
      {id:'5', nome:'Pedro', idade:50, email:'fagner.ufpa@gmail.com',avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX8oagHRIEeddwYcdkW9HqA_f2PZIKYiJX0Q&usqp=CAU'},
      

  ]);

 

  return (
    <View style={styles.container}>

      <View style={styles.cabecalho}>
          <Text style={styles.textoCabecalho}>App Listagem</Text>
      </View>

      <FlatList style={{ marginBottom:10}} showsVerticalScrollIndicator={false}
          data={feed}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <Pessoa data={item}/> }
      />
      
      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  cabecalho:{
    marginBottom:10,
    backgroundColor:'#7159c1',
    height:100,
    alignItems:'center',
    justifyContent:'center'  

  },
  textoCabecalho:{
      fontSize:30,
      color:'#FFF',
      fontWeight:'bold'
  }
  
});
