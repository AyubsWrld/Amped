import { StyleSheet, Text, View } from 'react-native';
import Profile from '../components/Profile'; 

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <View style={styles.rowOne}>

        <Profile />

        <View style={styles.navButton}>

        </View>

      </View>
      
      <View style={styles.textContainer}>
        <Text style={styles.text}>Hello, Ayub</Text>
        <Text style={styles.subText}>What would you like to begin with today?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 72,
    paddingBottom: 32,
    justifyContent: 'flex-start', 
    backgroundColor: '#070707', 
    gap : 32 , 
  },
  textContainer: { 
    gap : 16  , 
  },
  subText: {
    color: 'white',
    fontSize: 16,
    opacity: 0.7,
    fontWeight : 'light' , 
  },
  text: {
    fontSize: 32,
    color: 'white',
    fontWeight  : 'bold' , 
  },
  rowOne: {
    flexDirection : 'row' , 
    alignItems : 'center' , 
    justifyContent : 'spce-between' , 
    width : 1000 , 
  },
  navButton : {
    height : 30 , 
    width : 30 , 
    backgroundColor : '#0F3B1B' , 
    marginLeft : 66 , 
    borderRadius : 6 , 
    borderStyle : 'solid' , 
    borderColor : '#33C758' , 
    borderWidth : 1 , 
  } , 
});
