import React, {useState} from 'react';
import {Keyboard, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Button, Container, Header, Input, Timer} from '~components';
import {COLORS, FONTS} from '~constants';
import {StackScreenProps} from 'types';

export default function VerificationScreen({
  navigation,
}: StackScreenProps<'Verification'>) {
  const [otp, setOTP] = useState<string>('');
  const [error, setError] = useState<string>('');
  const initialMinute = 1;
  const initialSeconds = 59;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
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
        {minutes === 0 && seconds === 0 ? (
          <TouchableOpacity style={styles.linkContainer}>
            <Text style={styles.link}>Resent OTP</Text>
          </TouchableOpacity>
        ) : (
          <Timer
            minutes={minutes}
            seconds={seconds}
            setMinutes={setMinutes}
            setSeconds={setSeconds}
          />
        )}

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
    fontFamily: FONTS.RobotoRegular,
    color: COLORS.primary_gray,
    textAlign: 'right',
  },
});
