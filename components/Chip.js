import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Chip({ label, isSelected, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.chip, isSelected ? styles.selectedChip : styles.unselectedChip]}>
        <Text style={[styles.text , isSelected ? styles.selectedChipText : styles.unselectedChipText]}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  chip: {
    minHeight : 40 , 
    paddingHorizontal: 26,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedChip: {
    backgroundColor: '#0F3B1B', 
    borderColor: '#33C758',
    borderStyle : 'solid' , 
    borderWidth : 1 , 
    fontWeight : 'bold',
  },
  unselectedChip: {
    fontWeight : 'regular',
  },
  unselectedChipText : {
    color: 'rgba(255 , 255 , 255 , 0.4)',
    fontWeight : 'regular',
  } ,
  selectedChipText  : {
    fontWeight : 'bold',
    color: '#33C758', 
  },
  text: {
    fontSize: 12,
  },
});
