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
import {COLORS} from '~constants';
import {StackScreenProps, TabParamList} from 'types';

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigation({}: StackScreenProps<'Tab'>) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarButton: BottomTab,
        tabBarStyle: styles.tabContainer,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarLabel: 'Notify',
        }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Subjects" component={SubjectsScreen} />
      <Tab.Screen name="More" component={MoreScreen} />
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
