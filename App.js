import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Dashboard from './screens/Dashboard'; 
import Navbar from './components/Navbar'; 

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Dashboard /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#070707', 
  },
});

