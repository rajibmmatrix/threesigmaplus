import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';
import {
  AboutUsScreen,
  ChangePasswordScreen,
  ContactUsScreen,
  EditProfileScreen,
  ExamScreen,
  FAQScreen,
  ForgotScreen,
  LoginScreen,
  MyPerformanceScreen,
  PerformanceStatScreen,
  PreferenceScreen,
  PrivacyPolicyScreen,
  QuestionsScreen,
  ReportQuestionScreen,
  ResetPasswordScreen,
  SignupScreen,
  SplashScreen,
  StartSessionScreen,
  TermsAndConditionsScreen,
  TimeSpentScreen,
  TopicsScreen,
  VerificationScreen,
} from '~screens';
import {NoNetwork, ZoomScreen} from '~components';
import {COLORS} from '~constants';
import {navigationRef} from '~utils';
import {StackParamList} from 'types';

const Stack = createNativeStackNavigator<StackParamList>();

export default function Navigation(): JSX.Element {
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={{
        dark: false,
        colors: {
          ...DefaultTheme.colors,
          primary: COLORS.primary,
          text: COLORS.primary_text,
          background: COLORS.background,
          border: COLORS.primary_gray,
        },
      }}>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{orientation: 'portrait', headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />

        {/* Auth Screens start */}
        <Stack.Group>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Forgot" component={ForgotScreen} />
          <Stack.Screen name="Verification" component={VerificationScreen} />
          <Stack.Screen name="Reset" component={ResetPasswordScreen} />
        </Stack.Group>
        {/* Auth Screens end */}

        {/* App Screens start */}
        <Stack.Group>
          <Stack.Screen name="Tab" component={TabNavigation} />
          <Stack.Screen name="Preference" component={PreferenceScreen} />
          <Stack.Screen name="EditProfile" component={EditProfileScreen} />
          <Stack.Screen name="MyPerformance" component={MyPerformanceScreen} />
          <Stack.Screen name="Topics" component={TopicsScreen} />
          <Stack.Screen name="StartSession" component={StartSessionScreen} />
          <Stack.Screen name="Exam" component={ExamScreen} />
          <Stack.Screen name="Questions" component={QuestionsScreen} />
          <Stack.Screen name="TimeSpent" component={TimeSpentScreen} />
          <Stack.Screen
            name="ChangePassword"
            component={ChangePasswordScreen}
          />
          <Stack.Screen
            name="ReportQuestion"
            component={ReportQuestionScreen}
          />
          <Stack.Screen
            name="PerformanceStat"
            component={PerformanceStatScreen}
          />
        </Stack.Group>
        {/* App Screens end */}

        {/* More Screens */}
        <Stack.Group>
          <Stack.Screen name="FAQ" component={FAQScreen} />
          <Stack.Screen name="About" component={AboutUsScreen} />
          <Stack.Screen name="Contact" component={ContactUsScreen} />
          <Stack.Screen name="Policy" component={PrivacyPolicyScreen} />
          <Stack.Screen name="Terms" component={TermsAndConditionsScreen} />
        </Stack.Group>
        {/* More Screens */}

        <Stack.Group screenOptions={{presentation: 'fullScreenModal'}}>
          <Stack.Screen name="Zoom" component={ZoomScreen} />
        </Stack.Group>
      </Stack.Navigator>
      <NoNetwork />
    </NavigationContainer>
  );
}
