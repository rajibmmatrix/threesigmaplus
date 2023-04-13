import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Button, Input, Link} from '~common';
import {IMAGES} from '~constants';
import {setToken, useDispatch} from '~app';
import {useSignupMutation} from '~services';
import {ISignup} from 'types';

export default function SignupScreen({navigation}: any) {
  const dispatch = useDispatch();

  const [signup, {isLoading, isError, error}] = useSignupMutation();
  const [form, setform] = useState<ISignup>({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password1: '',
    password2: '',
  });

  const handleSignup = () => {
    signup(form)
      .unwrap()
      .then(({token}) => dispatch(setToken(token)))
      .catch((err: any) => console.log('Err:', err?.data));
  };

  return (
    <View style={styles.container}>
      <Image source={IMAGES.auth} style={styles.banner} />
      <Text style={styles.title}>CREATE YOUR ACCOUNT</Text>
      {isError ? <Text>{JSON.stringify(error)}</Text> : null}
      <Input
        title="First Name"
        placeholder="Enter your first name"
        value={form.first_name}
        autoCapitalize="none"
        onChangeText={e => setform(prev => ({...prev, first_name: e}))}
      />
      <Input
        title="Last Name"
        placeholder="Enter your last name"
        value={form.last_name}
        autoCapitalize="none"
        onChangeText={e => setform(prev => ({...prev, last_name: e}))}
      />
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
        value={form.password1}
        autoCapitalize="none"
        secureTextEntry
        onChangeText={e => setform(prev => ({...prev, password: e}))}
      />
      <Input
        title="Password"
        placeholder="Enter Password"
        value={form.password2}
        autoCapitalize="none"
        secureTextEntry
        onChangeText={e => setform(prev => ({...prev, password2: e}))}
      />
      <Button
        title="Sign in"
        loading={isLoading}
        onPress={handleSignup}
        style={styles.link}
      />
      <Link
        text="Already have an account? "
        link="Login"
        onPress={() => navigation.navigate('Login')}
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
