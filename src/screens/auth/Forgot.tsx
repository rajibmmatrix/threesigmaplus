import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Button, Container, Input, Link} from '~common';
import {COLORS, FONTS, IMAGES} from '~constants';
import {StackScreenProps} from 'types';

export default function ForgotScreen({navigation}: StackScreenProps<'Forgot'>) {
  const handleForgot = () => {};

  return (
    <Container scrollEnabled>
      <Image source={IMAGES.auth} style={styles.banner} />
      <Text style={styles.title}>Forgot Password?</Text>
      <View style={styles.body}>
        <Input
          label="Email"
          placeholder="Enter email id"
          autoCapitalize="none"
        />
        <Button title="Submit" onPress={handleForgot} style={styles.link} />
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
    height: 250,
    width: '90%',
    resizeMode: 'stretch',
    alignSelf: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: '400',
    fontFamily: FONTS.InterRegular,
    textAlign: 'center',
    color: COLORS.primary_title,
  },
  body: {
    marginTop: 25,
    paddingHorizontal: 20,
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
