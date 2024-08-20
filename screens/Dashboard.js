import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Profile from '../components/Profile';
import Card from '../components/Card';
import Chip from '../components/Chip';

export default function Dashboard() {
  const [selectedChip, setSelectedChip] = useState(null);

  const handleChipPress = (label) => {
    setSelectedChip(label);
  };

  return (
    <View style={styles.container}>
      <View style={styles.rowOne}>
        <Profile />
        <View style={styles.navButton}></View>
      </View>

      <View style={styles.rowTwo}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Hello, Ayub</Text>
          <Text style={styles.subText}>What would you like to begin with today?</Text>
        </View>

        <View style={styles.searchBar}></View>

        <View style={styles.optionContainer}>
          <Chip
            label="All"
            isSelected={selectedChip === "All"}
            onPress={() => handleChipPress("All")}
          />
          <Chip
            label="Completed"
            isSelected={selectedChip === "Completed"}
            onPress={() => handleChipPress("Completed")}
          />
          <Chip
            label="Pending"
            isSelected={selectedChip === "Pending"}
            onPress={() => handleChipPress("Pending")}
          />
        </View>
      </View>

      <View style={styles.cardContainer}>
        <Card />
        <Card />
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
    gap: 32,
  },
  textContainer: {
    gap: 16,
  },
  subText: {
    color: 'white',
    fontSize: 16,
    opacity: 0.7,
    fontWeight: 'light',
  },
  text: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
  },
  rowOne: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 1000,
  },
  navButton: {
    height: 30,
    width: 30,
    backgroundColor: '#0F3B1B',
    marginLeft: 66,
    borderRadius: 6,
    borderStyle: 'solid',
    borderColor: '#33C758',
    borderWidth: 1,
  },
  searchBar: {
    height: 40,
    width: 300,
    borderRadius: 30,
    backgroundColor: '#1C1C1E',
  },
  optionContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 4,
  },
  rowTwo: {
    flex: 1,
    gap: 16,
    flexDirection: 'column',
    paddingBottom: 0,
    maxHeight: 185,
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 12,
  },
});
