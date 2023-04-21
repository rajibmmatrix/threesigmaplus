import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Container} from '~common';
import {logout, useDispatch} from '~app';
import {useLazyLogoutQuery} from '~services';
import {TabScreenProps} from 'types';
import {ProfileItem} from '~components';

export default function ProfileScreen({navigation}: TabScreenProps<'Profile'>) {
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
        <ProfileItem
          title="Profile"
          onPress={() => navigation.navigate('EditProfile')}
        />
        <ProfileItem
          title="Preference"
          onPress={() => navigation.navigate('Preference')}
        />
        <ProfileItem
          title="My Performance"
          onPress={() => navigation.navigate('MyPerformance')}
        />
        <ProfileItem
          title="Change Password"
          onPress={() => navigation.navigate('ChangePassword')}
        />
        <ProfileItem title="Logout" onPress={handleLogout} />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
});
