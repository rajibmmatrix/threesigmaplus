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
import {ZoomScreen} from '~shared';
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
      <Stack.Screen
        name="ChangePassword"
        component={ChangePasswordScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="MyPerformance" component={MyPerformanceScreen} />
      <Stack.Screen
        name="Preference"
        component={PreferenceScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Topics" component={TopicsScreen} />
      <Stack.Group screenOptions={{presentation: 'fullScreenModal'}}>
        <Stack.Screen
          name="Zoom"
          component={ZoomScreen}
          options={{headerShown: false}}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
