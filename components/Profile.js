import { View, StyleSheet, Text } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        {/* Profile image could go here */}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Ayub Mohammed
        </Text>
        <Text style={styles.subtext}>
          johndoe@gmail.com
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    backgroundColor: '#1C1C1E',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'green',
    height: 48,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center', 
  },
  textContainer: {
    marginLeft: 16,
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
  subtext: {
    fontSize: 16,
    color: 'white',
    opacity: 0.7,
  },
});
