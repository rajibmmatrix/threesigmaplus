import React, {useState} from 'react';
import {Image, Keyboard, StyleSheet, Text} from 'react-native';
import {Button, Container, Input, Link} from '~common';
import {IMAGES} from '~constants';
import {setCredentials, useDispatch} from '~app';
import {useLoginMutation} from '~services';
import {isPassword} from '~utils';
import {ILogin, StackScreenProps} from 'types';

interface IErrors {
  username?: string;
  password?: string;
}

export default function LoginScreen({navigation}: StackScreenProps<'Login'>) {
  const dispatch = useDispatch();

  const [login, {isLoading, isError, error}] = useLoginMutation();
  const [form, setform] = useState<ILogin>({username: '', password: ''});
  const [errors, setErrors] = useState<IErrors>({});

  const validate = () => {
    Keyboard.dismiss();
    let isHaveError = false;
    setErrors({});
    if (!form.username) {
      isHaveError = true;
      handleError('username', 'Please enter username');
    }
    if (!form.password) {
      isHaveError = true;
      handleError('password', 'Please enter password');
    } else if (!isPassword(form.password)) {
      isHaveError = true;
      handleError('password', 'Password must be more then 8 character long');
    }
    if (isHaveError) {
      return;
    }
    handleLogin();
  };

  const handleLogin = () => {
    login(form)
      .unwrap()
      .then(({user, token}) => {
        dispatch(setCredentials({user, token}));
      })
      .catch((err: any) => console.log('Err:', err?.data));
  };

  const handleChange = (name: string, value: string) => {
    setform(prev => ({...prev, [name]: value}));
  };

  const handleError = (name: string, value: string) => {
    setErrors(prev => ({...prev, [name]: value}));
  };

  return (
    <Container style={styles.container}>
      <Image source={IMAGES.auth} style={styles.banner} />
      <Text style={styles.title}>LOG IN</Text>
      {isError ? <Text>{JSON.stringify(error)}</Text> : null}
      <Input
        label="Username"
        placeholder="Enter Username"
        value={form.username}
        autoCapitalize="none"
        onChangeText={e => handleChange('username', e)}
        error={errors?.username}
      />
      <Input
        label="Password"
        placeholder="Enter Password"
        value={form.password}
        autoCapitalize="none"
        secureTextEntry
        onChangeText={e => handleChange('password', e)}
        error={errors?.password}
      />
      <Link
        text="Forgot password"
        onPress={() => navigation.navigate('Forgot')}
        containerStyle={styles.forgot}
      />
      <Button
        title="Login"
        loading={isLoading}
        onPress={validate}
        style={styles.link}
      />
      <Link
        text="Dont have an account?"
        link="Create"
        onPress={() => navigation.navigate('Signup')}
        containerStyle={styles.link}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
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
    marginRight: 10,
    alignSelf: 'flex-end',
  },
  link: {
    marginTop: 15,
    alignSelf: 'center',
  },
});
