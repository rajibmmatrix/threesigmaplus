import React, {FC, memo} from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';
import {MathText as RMathText} from 'react-native-math-view';
import {COLORS, FONTS} from '~constants';

interface Props {
  value: string;
  style?: TextStyle;
}

const MathText: FC<Props> = ({value, style}) => {
  return (
    <RMathText
      value={value}
      direction="ltr"
      renderError={({error}: any) => (
        <Text style={[styles.title, styles.error]}>{error}</Text>
      )}
      CellRendererComponent={<Text style={[styles.title, style]} />}
    />
  );
};

export default memo(MathText);

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontFamily: FONTS.RobotoMedium,
    color: COLORS.primary_text,
  },
  error: {
    fontFamily: FONTS.RobotoRegular,
  },
});
