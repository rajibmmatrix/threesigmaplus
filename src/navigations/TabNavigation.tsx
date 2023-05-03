/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  MoreScreen,
  NotificationScreen,
  ProfileScreen,
  SubjectsScreen,
} from '~screens';
import {BottomTab} from '~components';
import {COLORS, Icons} from '~constants';
import {StackScreenProps, TabParamList} from 'types';

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigation({}: StackScreenProps<'Tab'>) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.tabContainer,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: Icons.ActiveHome,
          tabBarButton: props => (
            <BottomTab title="Home" Icon={Icons.ActiveHome} {...props} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: Icons.Bell,
          tabBarButton: props => (
            <BottomTab
              title="Notification"
              Icon={Icons.ActiveHome}
              {...props}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: Icons.User,
          tabBarButton: props => (
            <BottomTab title="Profile" Icon={Icons.ActiveHome} {...props} />
          ),
        }}
      />
      <Tab.Screen
        name="Subjects"
        component={SubjectsScreen}
        options={{
          headerShown: false,
          tabBarIcon: Icons.Subject,
          tabBarButton: props => (
            <BottomTab title="Subjects" Icon={Icons.ActiveSubject} {...props} />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{
          tabBarIcon: Icons.More,
          tabBarButton: props => (
            <BottomTab title="More" Icon={Icons.ActiveHome} {...props} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    left: 0,
    right: 0,
    bottom: 0,
    height: 65,
    borderWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    position: 'absolute',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: COLORS.background,
    shadowColor: COLORS.dark,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
});
