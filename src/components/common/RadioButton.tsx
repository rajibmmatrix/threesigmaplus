import React, {FC, memo} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS} from '~constants';
import {_styles} from '~shared';

interface Props {
  title: string;
  isSelected?: boolean;
  onPress: () => void;
}

const RadioButton: FC<Props> = ({title, onPress, isSelected = false}) => {
  return (
    <TouchableOpacity onPress={onPress} style={_styles.flexRowCenter}>
      <View style={[styles.box, _styles.allCenter]}>
        {isSelected ? <View style={styles.selected} /> : null}
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default memo(RadioButton);

const styles = StyleSheet.create({
  box: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: COLORS.primary,
    marginRight: 10,
  },
  selected: {
    width: 15,
    height: 15,
    borderRadius: 50,
    backgroundColor: COLORS.primary,
  },
  title: {
    fontSize: 14,
    fontFamily: FONTS.RobotoRegular,
    color: COLORS.primary_text,
  },
});
