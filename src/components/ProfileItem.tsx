import React, {FC, memo} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import type {SvgProps} from 'react-native-svg';
import {COLORS, FONTS} from '~constants';
import {_styles} from '~shared';

interface Props {
  title: string;
  onPress: () => void;
  Icon: FC<SvgProps>;
  isBig?: boolean;
}

const ProfileItem: FC<Props> = ({title, onPress, Icon, isBig = false}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[isBig ? styles.bigmain : styles.main, _styles.shadow]}>
      {isBig ? <Icon width={36} height={36} /> : null}
      <Text style={[styles.title, isBig && styles.mt10]}>{title}</Text>
      {!isBig ? <Icon width={24} height={24} /> : null}
    </TouchableOpacity>
  );
};

export default memo(ProfileItem);

const styles = StyleSheet.create({
  main: {
    paddingRight: 20,
    paddingLeft: 35,
    paddingVertical: 25,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.background,
    borderRadius: 14,
  },
  bigmain: {
    flex: 1,
    height: 250,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.background,
    borderRadius: 14,
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: FONTS.RobotoRegular,
    color: COLORS.primary_text,
    lineHeight: 20,
  },
  mt10: {marginTop: 10},
});
