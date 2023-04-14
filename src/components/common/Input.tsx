import React, {FC} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';

interface Props extends TextInputProps {
  label: string;
  error?: string;
  containerStyle?: ViewStyle;
}

const Input: FC<Props> = ({label, error, containerStyle = {}, ...props}) => {
  return (
    <View style={[styles.body, containerStyle]}>
      <Text style={styles.title}>{label}</Text>
      <TextInput {...props} style={[styles.title, styles.input]} />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  body: {padding: 10, paddingVertical: 5},
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 6,
  },
  error: {
    fontSize: 15,
    fontWeight: '400',
    color: '#f00',
    marginTop: 5,
  },
  input: {
    height: 48,
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 5,
    marginBottom: 0,
  },
});
