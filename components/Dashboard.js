import { StyleSheet, Text, View } from 'react-native';

export default function Dashboard(){
  return(
  <View style={styles.container}>
      <Text style={styles.text}>
        Hello world 
      </Text>
  </View>
  )
} ;

const styles = StyleSheet.create({
  container :{ 
    backgroundColor : 'black' , 
    height : '100%' , 
    width : '100%' , 
    flex : 1 , 
    justifyContent : 'center ' ,
    alignItems : 'center ' ,
  },
  text : {
    color : 'white' , 
  } , 
}) ; 
