import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';
import {
  ChangePasswordScreen,
  EditProfileScreen,
  MyPerformanceScreen,
  PreferenceScreen,
  TopicsScreen,
} from '~screens';
import {StackParamList} from 'types';

const Stack = createNativeStackNavigator<StackParamList>();

export default function AppNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Tab"
      screenOptions={{orientation: 'portrait'}}>
      <Stack.Screen
        name="Tab"
        component={TabNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="MyPerformance" component={MyPerformanceScreen} />
      <Stack.Screen name="Preference" component={PreferenceScreen} />
      <Stack.Screen name="Topics" component={TopicsScreen} />
    </Stack.Navigator>
  );
}
