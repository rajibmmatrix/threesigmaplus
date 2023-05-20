import React, {useState} from 'react';
import {Image, Keyboard, StyleSheet, Text, View} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import {Button, Container, GoogleButton, Input, Link, Space} from '~components';
import {COLORS, FONTS, IMAGES} from '~constants';
import {setCredentials, useDispatch} from '~app';
import {useLoginMutation} from '~services';
import {isPassword, showError, swidth} from '~utils';
import {ILogin, StackScreenProps} from 'types';

interface IErrors {
  username?: string;
  password?: string;
}

export default function LoginScreen({navigation}: StackScreenProps<'Login'>) {
  const dispatch = useDispatch();
  const [login, {isLoading}] = useLoginMutation();

  const [form, setform] = useState<ILogin>({username: '', password: ''});
  const [errors, setErrors] = useState<IErrors>({});

  const handleLogin = () => {
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
    login(form)
      .unwrap()
      .then(({user, token}) => {
        dispatch(setCredentials({user, token}));
        navigation.dispatch(
          CommonActions.reset({index: 1, routes: [{name: 'Tab'}]}),
        );
      })
      .catch((err: any) => showError(err?.data?.non_field_errors[0]));
  };

  const handleChange = (name: string, value: string) => {
    setform(prev => ({...prev, [name]: value}));
  };

  const handleError = (name: string, value: string) => {
    setErrors(prev => ({...prev, [name]: value}));
  };

  return (
    <Container scrollEnabled>
      <Image source={IMAGES.auth} style={styles.banner} />
      <Text style={styles.title}>Welcome back!</Text>
      <View style={styles.body}>
        <Input
          label="Username"
          value={form.username}
          autoCapitalize="none"
          onChangeText={e => handleChange('username', e)}
          error={errors?.username}
        />
        <Input
          label="Password"
          value={form.password}
          autoCapitalize="none"
          isPassword
          onChangeText={e => handleChange('password', e)}
          error={errors?.password}
          containerStyle={styles.password}
        />
        <Link
          link="Forgot Password?"
          onPress={() => navigation.navigate('Forgot')}
          containerStyle={styles.forgot}
        />
        <Button
          title="Login"
          loading={isLoading}
          onPress={handleLogin}
          style={styles.link}
        />
        <Space height={25} />
        <GoogleButton title="Log in with Google" onPress={() => {}} />
        <Link
          text="Don't have account? "
          link="Create now"
          onPress={() => navigation.navigate('Signup')}
          containerStyle={styles.link}
          textStyle={styles.linkText}
          linkStyle={styles.linkText}
        />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  banner: {
    marginTop: 20,
    height: swidth - 120,
    width: swidth - 120,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  title: {
    fontSize: 26,
    fontFamily: FONTS.RobotoRegular,
    textAlign: 'center',
    color: COLORS.primary_title,
  },
  body: {
    marginTop: 25,
    paddingHorizontal: 20,
  },
  password: {marginTop: 10},
  forgot: {
    marginTop: 10,
    alignSelf: 'flex-end',
  },
  link: {
    marginTop: 25,
    alignSelf: 'center',
  },
  linkText: {
    fontSize: 16,
    fontFamily: FONTS.RobotoRegular,
  },
});
