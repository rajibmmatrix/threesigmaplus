import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function MyPerformanceScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MyPerformance Screen</Text>
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
