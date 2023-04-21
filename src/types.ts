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
  Topics: {subject_id: string} | undefined;
  Zoom: {image: string} | undefined;
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
  preference_course_id: string | null;
  year: string | null;
}

//For Login request
export interface ILogin {
  username: string;
  password: string;
}

export interface IChangePassword {
  old_password: string;
  new_password: string;
}

export interface IEditProfile {
  first_name?: string;
  last_name?: string;
  email?: string;
  username?: string;
  preference_course_id?: string | null;
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

export interface ICourses {
  id: string;
  title: string;
}

export interface ISubject {
  id: string;
  title: string;
}

export interface ITopics {
  subject_id: string;
  id: string;
  title: string;
}

export interface IChapters {
  topic_id: string;
  id: string;
  title: string;
}

export interface IConcepts {
  sub_topic_id: string;
  id: string;
  title: string;
}
