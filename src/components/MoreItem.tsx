import React, {FC, memo} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS} from '~constants';
import {_styles} from '~shared';

interface Props {
  title: string;
  onPress: () => void;
}

const MoreItem: FC<Props> = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
      <View style={[styles.container, _styles.shadow]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(MoreItem);

const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
    marginBottom: 15,
    paddingVertical: 25,
    backgroundColor: COLORS.background,
    borderRadius: 14,
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: FONTS.RobotoRegular,
    lineHeight: 19,
    color: COLORS.primary_text,
  },
});
