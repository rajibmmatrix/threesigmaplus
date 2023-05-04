import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';
import {
  AboutUsScreen,
  ChangePasswordScreen,
  ContactUsScreen,
  EditProfileScreen,
  FAQScreen,
  MyPerformanceScreen,
  PreferenceScreen,
  PrivacyPolicyScreen,
  TermsAndConditionsScreen,
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
      {/* More Screens */}
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen name="FAQ" component={FAQScreen} />
        <Stack.Screen name="About" component={AboutUsScreen} />
        <Stack.Screen name="Contact" component={ContactUsScreen} />
        <Stack.Screen name="Policy" component={PrivacyPolicyScreen} />
        <Stack.Screen name="Terms" component={TermsAndConditionsScreen} />
      </Stack.Group>
      {/* More Screens */}
      <Stack.Group
        screenOptions={{presentation: 'fullScreenModal', headerShown: false}}>
        <Stack.Screen name="Zoom" component={ZoomScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
