import React, {useState} from 'react';
import {ActivityIndicator, Button, StyleSheet, Text, View} from 'react-native';
import {Input} from '~common';
import {setCredentials, useDispatch} from '~app';
import {useLoginMutation} from '~services';

export default function LoginScreen() {
  const dispatch = useDispatch();

  const [login, {isLoading, isError, error}] = useLoginMutation();
  const [form, setform] = useState({username: '', password: ''});

  const handleLogin = () => {
    login(form)
      .unwrap()
      .then(({user, token}) => {
        dispatch(setCredentials({user, token}));
      })
      .catch((err: any) => console.log('Err:', err?.data));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
      {isLoading ? <ActivityIndicator /> : null}
      {isError ? <Text>{JSON.stringify(error)}</Text> : null}
      <Input
        title="Username"
        placeholder="Enter Username"
        value={form.username}
        autoCapitalize="none"
        onChangeText={e => setform(prev => ({...prev, username: e}))}
      />
      <Input
        title="Password"
        placeholder="Enter Password"
        value={form.password}
        autoCapitalize="none"
        secureTextEntry
        onChangeText={e => setform(prev => ({...prev, password: e}))}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    color: '#000000',
  },
});
