import React, {FC, memo} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS} from '~constants';
import {_styles} from '~shared';

interface Props {
  title: string;
  isSelected?: boolean;
  onPress: () => void;
}

const PreferenceItem: FC<Props> = ({title, isSelected, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.container,
          _styles.shadow,
          isSelected && styles.selected,
        ]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(PreferenceItem);

const styles = StyleSheet.create({
  container: {
    padding: 25,
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: COLORS.background,
    borderRadius: 14,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily: FONTS.RobotoMedium,
    lineHeight: 21,
    color: COLORS.primary_text,
  },
  selected: {
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
});
