import React, {FC, memo} from 'react';
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import {COLORS, FONTS, Icons} from '~constants';
import _styles from './styles';

interface Props extends TextInputProps {
  containerStyle?: ViewStyle;
  style?: ViewStyle;
}

const Search: FC<Props> = ({containerStyle, style, ...props}) => {
  return (
    <View
      style={[
        styles.container,
        _styles.shadow,
        _styles.flexRowCenter,
        containerStyle,
      ]}>
      <Icons.Search width={21} height={21} />
      <TextInput
        placeholder="Search"
        placeholderTextColor={COLORS.primary_gray}
        {...props}
        style={[styles.input, style]}
      />
    </View>
  );
};

export default memo(Search);

const styles = StyleSheet.create({
  container: {
    height: 45,
    paddingHorizontal: 15,
    backgroundColor: COLORS.background,
    borderRadius: 10,
  },
  input: {
    flex: 1,
    fontSize: 15,
    fontFamily: FONTS.RobotoRegular,
    color: COLORS.primary_text,
    paddingLeft: 10,
  },
});
