import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Button, Input, Link} from '~common';
import {IMAGES} from '~constants';
import {setCredentials, useDispatch} from '~app';
import {useLoginMutation} from '~services';
import {StackScreenProps} from 'types';

export default function LoginScreen({navigation}: StackScreenProps<'Login'>) {
  const dispatch = useDispatch();

  const [login, {isLoading, isError, error}] = useLoginMutation();
  const [form, setform] = useState({username: '', password: ''});

  const handleLogin = () => {
    login(form)
      .unwrap()
      .then(({user, token}) => {
        dispatch(setCredentials({user, token}));
      })
      .catch((err: any) => console.log('Err:', err?.data));
  };

  return (
    <View style={styles.container}>
      <Image source={IMAGES.auth} style={styles.banner} />
      <Text style={styles.title}>LOG IN</Text>
      {isError ? <Text>{JSON.stringify(error)}</Text> : null}
      <Input
        title="Username"
        placeholder="Enter Username"
        value={form.username}
        autoCapitalize="none"
        onChangeText={e => setform(prev => ({...prev, username: e}))}
      />
      <Input
        title="Password"
        placeholder="Enter Password"
        value={form.password}
        autoCapitalize="none"
        secureTextEntry
        onChangeText={e => setform(prev => ({...prev, password: e}))}
      />
      <Link
        text="Forgot password"
        onPress={() => navigation.navigate('Forgot')}
        containerStyle={styles.forgot}
      />
      <Button
        title="Login"
        loading={isLoading}
        onPress={handleLogin}
        style={styles.link}
      />
      <Link
        text="Dont have an account?"
        link="Create"
        onPress={() => navigation.navigate('Signup')}
        containerStyle={styles.link}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#ffffff',
  },
  banner: {
    height: 200,
    width: '80%',
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    color: '#000000',
  },
  forgot: {
    alignSelf: 'flex-end',
    marginTop: 15,
    marginRight: 10,
  },
  link: {
    marginTop: 15,
    alignSelf: 'center',
  },
});
