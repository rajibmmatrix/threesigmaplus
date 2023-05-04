import React, {FC, memo} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS} from '~constants';

interface Props {
  title: string;
  onPress?: () => void;
}

const HomeTopic: FC<Props> = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={!onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(HomeTopic);

const styles = StyleSheet.create({
  container: {
    width: 135,
    height: 110,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 14,
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: FONTS.RobotoRegular,
    color: COLORS.light,
    lineHeight: 20,
    textAlign: 'center',
  },
});
