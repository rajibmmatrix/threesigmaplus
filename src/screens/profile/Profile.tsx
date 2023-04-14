import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from '~common';
import {logout, useDispatch} from '~app';
import {storage} from '~utils';
import {TabScreenProps} from 'types';

export default function ProfileScreen({}: TabScreenProps<'Profile'>) {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await storage.removeToken();
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      <Button title="Logout" onPress={handleLogout} />
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
    marginBottom: 15,
  },
});
