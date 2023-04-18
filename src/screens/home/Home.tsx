import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ZoomImage} from '~shared';
import {TabScreenProps} from 'types';

export default function HomeScreen({}: TabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <ZoomImage uri="https://avatars2.githubusercontent.com/u/7970947?v=3&s=460" />
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
