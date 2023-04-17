import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen, SignupScreen, ForgotScreen} from '~screens';
import {StackParamList} from 'types';

const Stack = createNativeStackNavigator<StackParamList>();

export default function AuthNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false, orientation: 'portrait'}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Forgot" component={ForgotScreen} />
    </Stack.Navigator>
  );
}
