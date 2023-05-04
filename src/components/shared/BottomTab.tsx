import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs';
import {COLORS, FONTS, Icons} from '~constants';

const icons = {
  Home: [Icons.Home, Icons.ActiveHome],
  Notify: [Icons.Bell, Icons.ActiveBell],
  Profile: [Icons.User, Icons.ActiveUser],
  Subjects: [Icons.Subject, Icons.ActiveSubject],
  More: [Icons.More, Icons.ActiveMore],
};

type IKey = 'Home' | 'Notify' | 'Profile' | 'Subjects' | 'More';

function BottomTab(props: BottomTabBarButtonProps) {
  const isSelected = props.accessibilityState?.selected;
  const label: IKey = props.accessibilityLabel?.split(',')?.[0]! as IKey;
  const Icon = isSelected ? icons[label]?.[1] : icons[label]?.[0];

  return (
    <Pressable
      onPress={props.onPress}
      style={[styles.container, isSelected && styles.flex]}>
      {isSelected ? (
        <View style={styles.body}>
          <Icon width={20} height={20} />
          <Text style={styles.title}>{label}</Text>
        </View>
      ) : (
        <Icon width={24} height={24} />
      )}
    </Pressable>
  );
}

export default BottomTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex: {flex: 2},
  body: {
    height: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.tabbar,
    borderRadius: 100,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: FONTS.RobotoMedium,
    color: COLORS.primary,
    marginLeft: 5,
  },
});
