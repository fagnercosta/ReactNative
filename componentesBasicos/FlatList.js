
import React,{useState} from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList,Image } from 'react-native';

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
          renderItem={({item}) => <RenderPessoa data={item}/> }
      />
      
      <StatusBar style="auto" />
    </View>
  );
}

function RenderPessoa(props){
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
  container: {
    flex: 1,
    backgroundColor:'white'
  },
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
  },
  avatar:{
      height:100,
      width:100, 
      borderRadius:50
  }
});
