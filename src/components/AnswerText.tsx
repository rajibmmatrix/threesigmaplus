import React, {FC, memo} from 'react';
import {StyleSheet, Text, TextInputProps} from 'react-native';
import {Input, Space} from '~common';
import {COLORS, FONTS} from '~constants';

interface Props extends TextInputProps {
  label?: string;
}

const AnswerText: FC<Props> = ({label = '', ...props}) => {
  return (
    <>
      <Text style={styles.title}>Answer: </Text>
      <Space height={10} />
      <Input label={label as string} keyboardType="decimal-pad" {...props} />
      <Space height={20} />
    </>
  );
};

export default memo(AnswerText);

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontFamily: FONTS.RobotoMedium,
    color: COLORS.secondary_text,
  },
});
