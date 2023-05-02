import React, {useState} from 'react';
import {Image, Keyboard, StyleSheet, Text, View} from 'react-native';
import {
  Button,
  Checkbox,
  Container,
  GoogleButton,
  Input,
  Link,
  Space,
} from '~components';
import {COLORS, FONTS, IMAGES} from '~constants';
import {setCredentials, setIsSignup, useDispatch} from '~app';
import {useSignupMutation} from '~services';
import {ISignup, StackScreenProps} from 'types';
import {isPassword} from '~utils';

interface IErrors {
  first_name?: string;
  last_name?: string;
  username?: string;
  email?: string;
  password1?: string;
  password2?: string;
  checkedTandS?: string;
}

export default function SignupScreen({navigation}: StackScreenProps<'Signup'>) {
  const dispatch = useDispatch();

  const [signup, {isLoading, isError, error}] = useSignupMutation();
  const [errors, setErrors] = useState<IErrors>({});
  const [tandc, setTandc] = useState<boolean>(false);
  const [form, setform] = useState<ISignup>({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password1: '',
    password2: '',
  });

  const handleError = (name: string, value: string) => {
    setErrors(prev => ({...prev, [name]: value}));
  };

  const handleChange = (name: string, value: string) => {
    setform(prev => ({...prev, [name]: value}));
  };

  const handleSignup = () => {
    Keyboard.dismiss();
    let isHaveError = false;
    setErrors({});
    if (!form.first_name) {
      isHaveError = true;
      handleError('first_name', 'Please enter first name');
    }
    if (!form.last_name) {
      isHaveError = true;
      handleError('last_name', 'Please enter last name');
    }
    if (!form.username) {
      isHaveError = true;
      handleError('username', 'Please enter username');
    }
    if (!form.email) {
      isHaveError = true;
      handleError('email', 'Please enter email');
    }
    if (!form.password1) {
      isHaveError = true;
      handleError('password1', 'Please enter password');
    } else if (!isPassword(form.password1)) {
      isHaveError = true;
      handleError('password1', 'Password must be more then 8 character long');
    }
    if (!form.password2) {
      isHaveError = true;
      handleError('password2', 'Please re-type password');
    } else if (form.password1 !== form.password2) {
      isHaveError = true;
      handleError('password2', 'Re-type Password not match');
    }
    if (!tandc) {
      isHaveError = true;
      handleError('checkedTandS', 'Please accept term & condition');
    }
    if (isHaveError) {
      return;
    }
    signup(form)
      .unwrap()
      .then(({token, user}) => {
        dispatch(setIsSignup(true));
        dispatch(setCredentials({token, user}));
      })
      .catch((err: any) => console.log('Err:', err?.data));
  };

  return (
    <Container isLoading={isLoading}>
      <Image source={IMAGES.auth} style={styles.banner} />
      <Text style={styles.title}>CREATE YOUR ACCOUNT</Text>
      {isError ? <Text>{JSON.stringify(error)}</Text> : null}
      <View style={styles.body}>
        <Input
          label="First Name"
          onChangeText={e => handleChange('first_name', e)}
          value={form.first_name}
          error={errors?.first_name}
        />
        <Input
          label="Last Name"
          value={form.last_name}
          error={errors?.last_name}
          containerStyle={styles.input}
          onChangeText={e => handleChange('last_name', e)}
        />
        <Input
          label="Username"
          value={form.username}
          error={errors?.username}
          autoCapitalize="none"
          containerStyle={styles.input}
          onChangeText={e => handleChange('username', e)}
        />
        <Input
          label="Email"
          value={form.email}
          error={errors?.email}
          autoCapitalize="none"
          containerStyle={styles.input}
          onChangeText={e => handleChange('email', e)}
        />
        <Input
          label="Password"
          value={form.password1}
          error={errors?.password1}
          autoCapitalize="none"
          isPassword
          onChangeText={e => handleChange('password1', e)}
          containerStyle={styles.input}
        />
        <Input
          label="Re-type Password"
          value={form.password2}
          error={errors?.password2}
          autoCapitalize="none"
          isPassword
          onChangeText={e => handleChange('password2', e)}
          containerStyle={styles.input}
        />
        <Space height={15} />
        <Checkbox
          isChecked={tandc}
          onPress={() => setTandc(prev => !prev)}
          label="I agree to the terms and condition and privacy policy of 3 Sigma Plus"
          containerStyle={styles.checkbox}
          error={errors.checkedTandS}
        />
        <Button
          title="Signup"
          loading={isLoading}
          onPress={handleSignup}
          style={styles.link}
        />
        <Space height={25} />
        <GoogleButton title="Sign up with Google" onPress={() => {}} />
        <Link
          text="Already have an account? "
          link="Login"
          onPress={() => navigation.navigate('Login')}
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
    height: 200,
    width: '80%',
    resizeMode: 'stretch',
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '400',
    fontFamily: FONTS.InterRegular,
    textAlign: 'center',
    color: COLORS.primary_title,
  },
  body: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  input: {marginTop: 10},
  checkbox: {
    paddingLeft: 10,
    paddingRight: 20,
    marginVertical: 5,
  },
  link: {
    marginTop: 20,
    alignSelf: 'center',
  },
  linkText: {
    fontSize: 16,
    fontFamily: FONTS.RobotoRegular,
  },
});
