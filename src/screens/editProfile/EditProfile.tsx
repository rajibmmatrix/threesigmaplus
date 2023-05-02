import React, {useEffect, useState} from 'react';
import {Image, Keyboard, StyleSheet, Text, View} from 'react-native';
import {Button, Container, Header, Input, Space, _styles} from '~components';
import {COLORS, FONTS, IMAGES, Icons} from '~constants';
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
      <Header title="Edit Profile" />
      <View style={styles.header}>
        <Image source={IMAGES.user_pic} style={styles.pic} />
        <View style={[styles.editButton, _styles.allCenter]}>
          <Icons.Camera height={24} width={24} />
        </View>
        <Text style={styles.title}>{user?.email}</Text>
      </View>
      <View style={styles.body}>
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
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pic: {
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: COLORS.light,
  },
  editButton: {
    width: 60,
    height: 60,
    backgroundColor: COLORS.primary_button,
    borderRadius: 100,
  },
  body: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: FONTS.RobotoMedium,
    color: COLORS.light_blue,
    marginTop: 15,
  },
});
