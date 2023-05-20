import React, {FC, memo} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS} from '~constants';
import {_styles} from '~shared';

interface Props {
  number: string | number;
  isSelected?: boolean;
  onPress: () => void;
}

const QuestionNumber: FC<Props> = ({number, isSelected = false, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View
        style={[styles.body, _styles.allCenter, isSelected && styles.selected]}>
        <Text style={[styles.title, isSelected && styles.selectedTitle]}>
          {number}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(QuestionNumber);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  body: {
    width: 48,
    height: 48,
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: COLORS.primary,
  },
  title: {
    fontSize: 20,
    fontFamily: FONTS.RobotoMedium,
    color: COLORS.primary,
    lineHeight: 23,
  },
  selected: {borderColor: COLORS.number},
  selectedTitle: {color: COLORS.number},
});
