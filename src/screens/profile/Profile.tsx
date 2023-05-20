import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import {Container, Header, ProfileItem, _styles} from '~components';
import {Icons} from '~constants';
import {logout, useDispatch} from '~app';
import {useLazyLogoutQuery} from '~services';
import {TabScreenProps} from 'types';

export default function ProfileScreen({navigation}: TabScreenProps<'Profile'>) {
  const dispatch = useDispatch();
  const [logoutapi, {isLoading}] = useLazyLogoutQuery();

  const handleLogout = () => {
    logoutapi().then(() => {
      dispatch(logout());
      navigation.dispatch(
        CommonActions.reset({index: 1, routes: [{name: 'Login'}]}),
      );
    });
  };

  return (
    <Container isLoading={isLoading} scrollEnabled={false}>
      <Header title="My Profile" back={false} showAvatar />
      <View style={styles.container}>
        <View style={_styles.rowCenterSpace}>
          <View style={[_styles.flex, styles.top]}>
            <ProfileItem
              isBig={true}
              Icon={Icons.Profile}
              title="Profile"
              onPress={() => navigation.navigate('EditProfile')}
            />
            <ProfileItem
              isBig={true}
              Icon={Icons.Lampon}
              title="Preference"
              onPress={() => navigation.navigate('Preference')}
            />
          </View>
          <ProfileItem
            isBig={true}
            Icon={Icons.Performance}
            title="My Performance"
            onPress={() => navigation.navigate('MyPerformance')}
          />
        </View>
        <ProfileItem
          Icon={Icons.Key}
          title="Change Password"
          onPress={() => navigation.navigate('ChangePassword')}
        />
        <ProfileItem
          Icon={Icons.Logout}
          title="Logout"
          onPress={handleLogout}
        />
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
  top: {
    marginRight: 5,
    paddingRight: 5,
  },
});
