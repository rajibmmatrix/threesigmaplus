import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  MoreScreen,
  NotificationScreen,
  ProfileScreen,
  SubjectsScreen,
} from '~screens';
import {StackScreenProps, TabParamList} from 'types';

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigation({}: StackScreenProps<'Tab'>) {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Subjects" component={SubjectsScreen} />
      <Tab.Screen name="More" component={MoreScreen} />
    </Tab.Navigator>
  );
}
