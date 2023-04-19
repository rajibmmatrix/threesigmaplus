import React, {FC} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import {COLORS} from '~constants';

interface Props extends TextInputProps {
  label?: string;
  error?: string;
  containerStyle?: ViewStyle;
}

const Input: FC<Props> = ({label, error, containerStyle = {}, ...props}) => {
  return (
    <View style={[styles.body, containerStyle]}>
      {label && <Text style={styles.title}>{label}</Text>}
      <TextInput
        placeholderTextColor={COLORS.primary_gray}
        {...props}
        style={[styles.inputText, styles.input]}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  body: {paddingVertical: 5},
  title: {
    fontSize: 14,
    fontWeight: '400',
    color: COLORS.secondary_gray,
    paddingHorizontal: 2,
  },
  error: {
    fontSize: 14,
    fontWeight: '400',
    color: COLORS.error,
    marginTop: 5,
  },
  inputText: {
    fontSize: 16,
    fontWeight: '400',
    color: COLORS.dark,
    paddingHorizontal: 2,
  },
  input: {
    height: 40,
    width: '100%',
    borderBottomWidth: 0.6,
    borderBottomColor: COLORS.primary_title,
    paddingVertical: 0,
    margin: 0,
  },
});
