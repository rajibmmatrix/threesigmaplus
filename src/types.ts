import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackParamList {}
  }
}

//For Stack Navigations with App
export type StackParamList = AppParamList & {
  //auth Screens
  Login: undefined;
  Signup: undefined;
  Forgot: undefined;
};

//For App Navigations
export type AppParamList = {
  Tab: NavigatorScreenParams<TabParamList> | undefined;
  ChangePassword: undefined;
  EditProfile: undefined;
  MyPerformance: undefined;
  Preference: undefined;
  Topics: undefined;
};

//For Tab Navigations
export type TabParamList = {
  Home: undefined;
  Notification: undefined;
  Profile: undefined;
  Subjects: undefined;
  More: undefined;
};

//For Stack Screens
export type StackScreenProps<Screen extends keyof StackParamList> =
  NativeStackScreenProps<StackParamList, Screen>;

//For Tab Screens
export type TabScreenProps<Screen extends keyof TabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<TabParamList, Screen>,
    NativeStackScreenProps<StackParamList>
  >;

export interface User {
  first_name: string;
  last_name: string;
  email: string;
  username: string;
}

//For Login request
export interface ILogin {
  username: string;
  password: string;
}

//For Signup request
export interface ISignup {
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  password1: string;
  password2: string;
}

//For Login and signup response
export interface IAuth {
  user: User;
  token: string;
}
