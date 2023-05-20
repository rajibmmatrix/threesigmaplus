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
  Splash: undefined;
  //auth Screens
  Login: undefined;
  Signup: undefined;
  Forgot: undefined;
  Verification: {email: string} | undefined;
  Reset: {email: string} | undefined;
};

//For App Navigations
export type AppParamList = {
  Tab: NavigatorScreenParams<TabParamList> | undefined;
  ChangePassword: undefined;
  EditProfile: undefined;
  MyPerformance: undefined;
  Preference: undefined;
  Topics: {subject_id: string; subject_name: string} | undefined;
  StartSession: {subject_name: string; chapter_id: string} | undefined;
  Questions: undefined;
  Exam: undefined;
  ReportQuestion: undefined;
  PerformanceStat: {session_id: string} | undefined;
  TimeSpent: undefined;
  Zoom: {image: string} | undefined;
  About: undefined;
  Policy: undefined;
  Terms: undefined;
  Contact: undefined;
  FAQ: undefined;
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
  id: string;
  title: string;
  topic_id?: string;
}

export interface IConcepts {
  sub_topic_id: string;
  id: string;
  title: string;
}

export interface ITopicsAndChapters {
  id: string;
  title: string;
  chapters: IChapters[];
}

export interface IAllTopics {
  topics: ITopicsAndChapters[];
}

export interface IOption {
  type: string;
  text?: string;
  url?: string;
}

export interface IQuestion extends IOption {
  parts?: IOption[];
}

export interface IOptionAndQuestion {
  type: 'multiple_choice' | 'twos_marker' | 'integral' | 'numerical';
  stmt: IQuestion[];
  options: IOption[][] | [];
  solution: null;
}

export interface IProblems {
  session_id: string;
  sequence_no: string;
  answer_submitted: string;
  multiple_correct_options: boolean;
  problem_text: IOptionAndQuestion;
}

export interface IExams {
  session_id: string;
  started_at: string;
  ended_at: null | string;
  subject_id: string;
  chapter_id: string;
  status: 'active' | 'ended' | string;
  max_question_score: number | string;
  problems: IProblems[];
}

export interface IStartExam {
  chapter_id: string;
}

export interface IAnswer {
  sequence_no: string;
  answer_submitted: string[];
  time_spent: number;
}

export interface ISAnswer {
  sequence_no: string;
  answer_submitted: string;
  time_spent: number;
}

export interface IUAnswer {
  id: string;
  params: ISAnswer[];
}

export interface ISubmitAnswer {
  time: number;
  answer: string;
}

export interface IExamResult extends IExams {
  result: {
    session_score: string | number;
    max_score: string | number;
    problems: IProblems[];
  };
}

export interface IReport {
  session_id: string;
  sequence_no: string;
  title?: string;
  detail?: string;
}
