import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function ForgotScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    color: '#000000',
  },
});
