import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Container} from '~common';
import {logout, useDispatch} from '~app';
import {useLazyLogoutQuery} from '~services';
import {TabScreenProps} from 'types';

export default function ProfileScreen({}: TabScreenProps<'Profile'>) {
  const dispatch = useDispatch();
  const [logoutapi, {isLoading}] = useLazyLogoutQuery();

  const handleLogout = () => {
    logoutapi().then(() => {
      dispatch(logout());
    });
  };

  return (
    <Container isLoading={isLoading} scrollEnabled={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Profile Screen</Text>
        <Button title="Logout" onPress={handleLogout} />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    color: '#000000',
    marginBottom: 15,
  },
});
