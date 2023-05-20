import React, {FC, memo} from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import {FONTS} from '~constants';

const GradientText: FC<TextProps> = props => {
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient
        colors={['#3550DC', '#27E9F7']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <Text {...props} style={[styles.title, props.style]} />
      </LinearGradient>
    </MaskedView>
  );
};

export default memo(GradientText);

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontFamily: FONTS.RobotoRegular,
    lineHeight: 16,
    opacity: 0,
  },
});
