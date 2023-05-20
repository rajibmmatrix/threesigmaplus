import React, {FC, memo} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS, FONTS} from '~constants';
import {_styles} from '~shared';

interface Props {
  title: string;
  isSelected?: boolean;
  onPress: () => void;
}

const PreferenceItem: FC<Props> = ({title, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={[styles.container, _styles.shadow]}>
      <Text style={styles.title}>{title}</Text>
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
    fontSize: 16,
    fontFamily: FONTS.RobotoRegular,
    color: COLORS.primary_text,
    lineHeight: 19,
  },
  selected: {
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
});
