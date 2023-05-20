import React, {FC, memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTS} from '~constants';

interface Props {
  msg: string;
  top?: number;
}

const Error: FC<Props> = ({msg, top = 0}) => {
  return (
    <View style={[styles.container, {paddingTop: top}]}>
      <Text style={styles.title}>{msg}</Text>
    </View>
  );
};

export default memo(Error);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontFamily: FONTS.RobotoMedium,
    color: COLORS.primary_text,
    lineHeight: 21,
  },
});
