import React, {useState} from 'react';
import {Keyboard, StyleSheet, View} from 'react-native';
import {Button, Container, Header, Input} from '~components';
import {isPassword} from '~utils';
import {StackScreenProps} from 'types';

interface IForm {
  new_password?: string;
  confirm_password?: string;
}

export default function ResetPasswordScreen({
  navigation,
}: StackScreenProps<'Reset'>) {
  const [errors, setErrors] = useState<IForm | null>(null);
  const [form, setForm] = useState<IForm>({
    new_password: '',
    confirm_password: '',
  });

  const handleSubmit = () => {
    Keyboard.dismiss();
    let isHaveError = false;
    setErrors({});
    if (!form.new_password) {
      isHaveError = true;
      handleError('new_password', 'Please enter new password');
    } else if (!isPassword(form.new_password)) {
      isHaveError = true;
      handleError(
        'new_password',
        'Password must be more then 8 character long',
      );
    }
    if (!form.confirm_password) {
      isHaveError = true;
      handleError('confirm_password', 'Please confirm new password');
    } else if (form.new_password !== form.confirm_password) {
      isHaveError = true;
      handleError('confirm_password', 'Confirm new password not match');
    }
    if (isHaveError) {
      return;
    }
    navigation.navigate('Login');
  };

  const handleChange = (key: string, value: string) => {
    setForm(prev => ({...prev, [key]: value}));
  };

  const handleError = (key: string, value: string) => {
    setErrors(prev => ({...prev, [key]: value}));
  };

  return (
    <Container isLoading={false}>
      <Header title="Reset Password" />
      <View style={styles.container}>
        <Input
          label="Enter New Password"
          onChangeText={e => handleChange('new_password', e)}
          isPassword
          autoCapitalize="none"
          value={form.new_password}
          error={errors?.new_password}
        />
        <Input
          label="Confirm New Password"
          onChangeText={e => handleChange('confirm_password', e)}
          isPassword
          autoCapitalize="none"
          value={form.confirm_password}
          error={errors?.confirm_password}
        />
        <Button title="SAVE" onPress={handleSubmit} style={styles.button} />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    paddingHorizontal: 20,
  },
  button: {
    marginTop: 30,
    alignSelf: 'center',
  },
});
