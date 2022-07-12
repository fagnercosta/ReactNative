
import { StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.box1}>

              </View>

              <View style={styles.box2}>

              </View>

              <View style={styles.box3}>

              </View>

              <View style={styles.box4}>

              </View>

              <View style={styles.box2}>

        </View>
      </ScrollView>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  box1:{
    height:240,
    backgroundColor:'red'
  },
  box2:{
    height:240,
    backgroundColor:'blue'
  },
  box3:{
    height:240,
    backgroundColor:'green'
  },
  box4:{
    height:240,
    backgroundColor:'orange'
  }
});
