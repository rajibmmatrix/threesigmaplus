import React, {useState} from 'react';
import {Image, Keyboard, StyleSheet, Text, View} from 'react-native';
import {CommonActions} from '@react-navigation/native';
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
import {
  error_message,
  isPassword,
  isValidEmail,
  showError,
  swidth,
} from '~utils';
import {ISignup, StackScreenProps} from 'types';

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
  const [signup, {isLoading}] = useSignupMutation();

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
    } else if (!isValidEmail(form.email)) {
      isHaveError = true;
      handleError('email', 'Please enter a valid email');
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
        navigation.dispatch(
          CommonActions.reset({index: 1, routes: [{name: 'Tab'}]}),
        );
      })
      .catch((err: any) => {
        if (!err.data) {
          showError(error_message);
        }
        for (const key in err?.data) {
          if (Object.prototype.hasOwnProperty.call(err?.data, key)) {
            const element = err?.data[key];
            setErrors(prev => ({...prev, [key]: element[0]}));
          }
        }
      });
  };

  return (
    <Container isLoading={isLoading}>
      <Image source={IMAGES.auth} style={styles.banner} />
      <Text style={styles.title}>Create Your Account</Text>
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
          label="I agree to the "
          containerStyle={styles.checkbox}
          error={errors.checkedTandS}>
          <Text
            onPress={() => navigation.navigate('Terms')}
            style={styles.subLink}>
            terms and condition
          </Text>{' '}
          and{' '}
          <Text
            onPress={() => navigation.navigate('Policy')}
            style={styles.subLink}>
            privacy policy
          </Text>{' '}
          of 3 Sigma Plus
        </Checkbox>
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
    marginTop: 20,
    width: swidth - 120,
    height: swidth - 120,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: FONTS.RobotoRegular,
    color: COLORS.primary_title,
    textAlign: 'center',
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
  subLink: {
    fontFamily: FONTS.RobotoMedium,
    color: COLORS.primary_title,
  },
});
