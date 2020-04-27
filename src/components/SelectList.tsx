import React, { useState, useEffect } from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { colors } from '../theme';

type SelectListProps = {
  onSelect: (optionId: any[]) => void;
  options: any[];
};

const SelectList = ({ options, onSelect }: SelectListProps) => {
  const [selectedValues, setSelectedValues] = useState([]);

  const _handleSelect = id => {
    const isSelected = selectedValues.some(item => item === id);
    if (isSelected) {
      setSelectedValues(selectedValues.filter(item => item !== id));
    } else {
      setSelectedValues(ps => [...ps, id]);
    }
  }

  useEffect(() => {
    onSelect(selectedValues);
  }, [selectedValues])

  return (
    <View style={styles.container}>
      {options.map(option => {
        const isSelected = selectedValues.some(item => item === option.id);
        return (
          <TouchableOpacity
            onPress={() => _handleSelect(option.id)}
            style={[styles.chip, isSelected && styles.selectedChip]}
          >
            <Text style={[styles.text, isSelected && styles.selectedText]}>{option.label}</Text>
          </TouchableOpacity>
        )
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginHorizontal: 25,
  },
  text: {
    color: colors.blue300,
    fontSize: 15,
  },
  chip: {
    backgroundColor: colors.white,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginHorizontal: 5,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: colors.blue300,
  },
  selectedChip: {
    backgroundColor: colors.blue300,
    borderWidth: 1,
    borderColor: colors.blue300,
  },
  selectedText: {
    color: colors.white,
  }
});

export default SelectList;
