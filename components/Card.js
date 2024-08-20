import { StyleSheet, Text, View } from 'react-native';


export default function Card(){
  return(
    <View style={styles.cardContainer}> 

      <View style={styles.image}> 
      </View>

      <View style={styles.textContainer}> 
        <Text style={styles.title}>
          Title
        </Text>

        <Text style={styles.subTitle}>
          Description 
        </Text>

      </View>

    </View>
  )
} ; 


const styles = StyleSheet.create({
  cardContainer : {
    minHeight : 300, 
    minWidth : 250 , 
    maxHeight : 300, 
    maxWidth : 250 , 
    backgroundColor : '#1C1C1E' , 
    borderRadius : 22 , 
    flex : 1 , 
    flexDirection : 'column' , 
    justifyContent : 'space-between' , 
    padding : 16 , 
    borderStyle : 'solid' , 
    borderColor : 'rgba( 255 , 255 , 255 , 0.06)' , 
    borderWidth : 1 , 
  } , 
  image : {
    height : 48, 
    width : 48, 
    backgroundColor : '#0F3B1B' , 
    borderRadius : 12 , 
  } ,
  textContainer : {

  } , 
  title : {
    color : 'white' , 
    fontSize : 16 , 
    fontWeight : 'bold' , 
  } , 
  subTitle : {
    color : 'rgba( 255 , 255 , 255 , 0.7)' , 
  } ,
}) ;
