import React, {FC, memo} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS, IMAGES} from '~constants';
import {swidth} from '~utils';

interface Props {
  title: string;
  index?: number;
  onPress?: () => void;
}

const colors = ['#E3F0E4', '#FFDEDE', '#FFF8E2', '#F4F9FF'];

const Subject: FC<Props> = ({title, index = 0, onPress}) => {
  const key: number =
    index % 4 === 0 ? 3 : index % 3 === 0 ? 2 : index % 2 === 0 ? 1 : 0;

  return (
    <TouchableOpacity onPress={onPress} disabled={!onPress}>
      <View style={[styles.container, {backgroundColor: colors[key]}]}>
        <Image source={IMAGES.home_item} style={styles.image} />
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(Subject);

const styles = StyleSheet.create({
  container: {
    height: 115,
    width: swidth / 2 - 30,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginBottom: 20,
  },
  image: {
    width: 68,
    height: 68,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: FONTS.RobotoMedium,
    color: COLORS.primary_text,
    textAlign: 'center',
    marginTop: 5,
  },
});
