import React, {FC} from 'react';
import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';

interface Props extends TextInputProps {
  title: string;
}

const Input: FC<Props> = props => {
  return (
    <View style={styles.body}>
      <Text style={styles.title}>{props.title}</Text>
      <TextInput {...props} style={[styles.title, styles.input]} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  body: {
    height: 80,
    padding: 10,
    marginTop: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 6,
  },
  input: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 5,
    marginBottom: 0,
  },
});
