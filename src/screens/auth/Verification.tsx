import React, {useState} from 'react';
import {Keyboard, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Button, Container, Header, Input} from '~components';
import {StackScreenProps} from 'types';
import {COLORS, FONTS} from '~constants';

export default function VerificationScreen({
  navigation,
}: StackScreenProps<'Verification'>) {
  const [otp, setOTP] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = () => {
    Keyboard.dismiss();
    setError('');
    if (!otp) {
      setError('Please enter the OTP you recived');
      return;
    }
    navigation.navigate('Reset', {email: otp});
  };

  return (
    <Container isLoading={false}>
      <Header title="Forgot Password" />
      <View style={styles.container}>
        <Input
          label="Enter OTP"
          onChangeText={setOTP}
          autoCapitalize="none"
          keyboardType="decimal-pad"
          value={otp}
          error={error}
        />
        <TouchableOpacity style={styles.linkContainer}>
          <Text>Resent OTP</Text>
        </TouchableOpacity>
        <Button title="Submit" onPress={handleSubmit} style={styles.button} />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    paddingHorizontal: 20,
  },
  button: {
    marginTop: 30,
    alignSelf: 'center',
  },
  linkContainer: {
    marginTop: 5,
    alignSelf: 'flex-end',
  },
  link: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: FONTS.RobotoRegular,
    color: COLORS.primary_gray,
    textAlign: 'right',
  },
});
