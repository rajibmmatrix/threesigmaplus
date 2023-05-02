import React, {useState} from 'react';
import {Keyboard, StyleSheet, View} from 'react-native';
import {Button, Container, Input} from '~common';
import {useChangePasswordMutation} from '~services';
import {isPassword} from '~utils';
import {IChangePassword, StackScreenProps} from 'types';

interface IErrors {
  old_password?: string;
  new_password?: string;
  confirm_password?: string;
}

type IForm = IChangePassword & {
  confirm_password: string;
};

export default function ChangePasswordScreen({}: StackScreenProps<'ChangePassword'>) {
  const [update, {isLoading}] = useChangePasswordMutation();

  const [errors, setErrors] = useState<IErrors | null>(null);
  const [form, setForm] = useState<IForm>({
    old_password: '',
    new_password: '',
    confirm_password: '',
  });

  const handleSubmit = () => {
    Keyboard.dismiss();
    let isHaveError = false;
    setErrors({});
    if (!form.old_password) {
      isHaveError = true;
      handleError('old_password', 'Please enter old password');
    } else if (!isPassword(form.old_password)) {
      isHaveError = true;
      handleError(
        'old_password',
        'Password must be more then 8 character long',
      );
    }
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
      handleError('confirm_password', 'Please re-type password');
    } else if (form.new_password !== form.confirm_password) {
      isHaveError = true;
      handleError('confirm_password', 'Re-type Password not match');
    }
    if (isHaveError) {
      return;
    }
    const {confirm_password: _, ...params} = form;
    console.log(_);
    update(params);
  };

  const handleChange = (key: string, value: string) => {
    setForm(prev => ({...prev, [key]: value}));
  };

  const handleError = (key: string, value: string) => {
    setErrors(prev => ({...prev, [key]: value}));
  };

  return (
    <Container isLoading={isLoading}>
      <View style={styles.container}>
        <Input
          label="Old Password"
          onChangeText={e => handleChange('old_password', e)}
          secureTextEntry
          autoCapitalize="none"
          value={form.old_password}
          error={errors?.old_password}
        />
        <Input
          label="New Password"
          onChangeText={e => handleChange('new_password', e)}
          secureTextEntry
          autoCapitalize="none"
          value={form.new_password}
          error={errors?.new_password}
        />
        <Input
          label="Re-type Password"
          onChangeText={e => handleChange('confirm_password', e)}
          secureTextEntry
          autoCapitalize="none"
          value={form.confirm_password}
          error={errors?.confirm_password}
        />
        <Button title="Submit" onPress={handleSubmit} style={styles.button} />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  button: {
    marginTop: 30,
    marginRight: 10,
    alignSelf: 'flex-end',
  },
});
