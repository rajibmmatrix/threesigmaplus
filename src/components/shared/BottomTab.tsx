import React, {FC, memo} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs';
import {SvgProps} from 'react-native-svg';
import {COLORS, FONTS} from '~constants';

interface Props extends BottomTabBarButtonProps {
  title: string;
  Icon: FC<SvgProps>;
}

const BottomTab: FC<Props> = ({title, Icon, ...props}) => {
  const isSelected = props.accessibilityState?.selected;

  return (
    <Pressable
      onPress={props.onPress}
      style={[styles.container, isSelected && styles.flex]}>
      {isSelected ? (
        <View style={styles.body}>
          <Icon width={18} height={18} />
          <Text style={styles.title}>{title}</Text>
        </View>
      ) : (
        props.children
      )}
    </Pressable>
  );
};

export default memo(BottomTab);

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
    color: COLORS.blue,
    marginLeft: 5,
  },
});
