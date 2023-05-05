import React, {useState} from 'react';
import {Keyboard, StyleSheet, View} from 'react-native';
import {Button, Container, Header, Input} from '~components';
import {StackScreenProps} from 'types';

export default function ForgotScreen({navigation}: StackScreenProps<'Forgot'>) {
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = () => {
    Keyboard.dismiss();
    setError('');
    if (!email) {
      setError('Please enter your email');
      return;
    }
    navigation.navigate('Verification', {email});
  };

  return (
    <Container isLoading={false}>
      <Header title="Forgot Password" />
      <View style={styles.container}>
        <Input
          label="Email"
          onChangeText={setEmail}
          autoCapitalize="none"
          value={email}
          error={error}
        />
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
});
