import {useNavigation} from '@react-navigation/native';
import React, {FC, memo} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Avatar from './Avatar';
import {COLORS, FONTS, Icons} from '~constants';

interface Props {
  title: string;
  back?: boolean;
  showAvatar?: boolean;
}

const Header: FC<Props> = ({title, back = true, showAvatar = false}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        {back && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icons.ArrowLeft width={24} height={24} />
          </TouchableOpacity>
        )}
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.box}>{showAvatar && <Avatar size={50} />}</View>
    </View>
  );
};

export default memo(Header);

const styles = StyleSheet.create({
  container: {
    minHeight: 80,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: COLORS.primary,
  },
  box: {
    width: 50,
    height: 50,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily: FONTS.RobotoMedium,
    textAlign: 'center',
    color: COLORS.light,
  },
});
