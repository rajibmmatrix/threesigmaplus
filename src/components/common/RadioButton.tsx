import React, {FC, memo} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '~constants';

interface Props {
  title: string;
  isSelected?: boolean;
  onPress: () => void;
}

const RadioButton: FC<Props> = ({title, onPress, isSelected = false}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {isSelected ? (
        <View style={[styles.unselected, styles.selected]} />
      ) : (
        <View style={styles.unselected} />
      )}
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default memo(RadioButton);

const styles = StyleSheet.create({
  container: {
    margin: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  unselected: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: COLORS.dark,
    marginRight: 10,
  },
  selected: {
    backgroundColor: 'blue',
  },
  title: {
    fontSize: 14,
    fontWeight: '400',
    color: COLORS.dark,
  },
});
