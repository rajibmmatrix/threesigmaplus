import React, {FC, memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTS} from '~constants';
import {_styles} from '~shared';

interface Props {
  message: string;
}

const Notification: FC<Props> = ({message}) => {
  return (
    <View style={[styles.container, _styles.shadow]}>
      <Text style={styles.title}>{message}</Text>
    </View>
  );
};

export default memo(Notification);

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    paddingVertical: 20,
    paddingHorizontal: 25,
    backgroundColor: COLORS.background,
    borderRadius: 14,
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: FONTS.RobotoRegular,
    color: COLORS.primary_text,
  },
});
