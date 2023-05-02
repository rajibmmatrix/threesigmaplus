import React, {useEffect, useState} from 'react';
import {Image, Keyboard, StyleSheet, Text, View} from 'react-native';
import {Button, Container, Input, Space} from '~common';
import {COLORS, IMAGES} from '~constants';
import {useEditProfileMutation, useGetProfileQuery} from '~services';
import {IEditProfile, StackScreenProps} from 'types';

interface IErrors {
  first_name?: string;
  last_name?: string;
  email?: string;
}

export default function EditProfileScreen({}: StackScreenProps<'EditProfile'>) {
  const {isLoading, data: user} = useGetProfileQuery();
  const [update, {isLoading: loading}] = useEditProfileMutation();

  const [errors, setErrors] = useState<IErrors | null>(null);
  const [form, setForm] = useState<IEditProfile>({
    first_name: '',
    last_name: '',
    email: '',
  });

  useEffect(() => {
    if (user) {
      setForm({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
      });
    }
    return () => {};
  }, [user]);

  const handleChange = (name: string, value: string) => {
    setForm(prev => ({...prev, [name]: value}));
  };

  const handleError = (name: string, value: string) => {
    setErrors(prev => ({...prev, [name]: value}));
  };

  const handleSubmit = () => {
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
    if (!form.email) {
      isHaveError = true;
      handleError('email', 'Please enter email');
    }
    if (isHaveError) {
      return;
    }
    update(form);
  };

  return (
    <Container isLoading={isLoading || loading} scrollEnabled>
      <View style={styles.header}>
        <Image source={IMAGES.auth} style={styles.pic} />
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>My details</Text>
        <Input
          label="First name"
          onChangeText={e => handleChange('first_name', e)}
          value={form.first_name}
          error={errors?.first_name}
        />
        <Input
          label="Last name"
          onChangeText={e => handleChange('last_name', e)}
          value={form.last_name}
          error={errors?.last_name}
        />
        <Input
          label="Email"
          onChangeText={e => handleChange('email', e)}
          value={form.email}
          error={errors?.email}
        />
        <Space height={30} />
        <Button title="Submit" onPress={handleSubmit} style={styles.button} />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pic: {
    width: 120,
    height: 120,
    borderRadius: 100,
    backgroundColor: COLORS.light,
  },
  body: {
    marginTop: 35,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#8A2727',
    margin: 10,
    textDecorationLine: 'underline',
  },
  button: {
    alignSelf: 'flex-end',
    marginRight: 15,
  },
});
