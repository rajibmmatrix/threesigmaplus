import React, {FC, memo} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS, FONTS} from '~constants';
import {_styles} from '~shared';

interface Props {
  index: string | number;
  title: string;
  onPress: () => void;
}

const Topic: FC<Props> = ({index, title, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, _styles.shadow]}>
      <Text style={styles.number}>{index}</Text>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default memo(Topic);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 60,
    marginBottom: 12,
    paddingVertical: 15,
    paddingHorizontal: 18,
    backgroundColor: COLORS.background,
    flexDirection: 'row',
    borderRadius: 14,
  },
  number: {
    fontSize: 24,
    fontFamily: FONTS.RobotoMedium,
    color: COLORS.number,
    lineHeight: 28,
    paddingRight: 10,
  },
  title: {
    fontSize: 16,
    fontFamily: FONTS.RobotoBold,
    color: COLORS.primary_text,
    lineHeight: 21,
    marginTop: 3,
  },
});
