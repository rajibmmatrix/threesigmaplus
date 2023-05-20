import React, {FC, memo} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS, Icons} from '~constants';
import {randomColor, swidth} from '~utils';

interface Props {
  title: string;
  onPress?: () => void;
}

const Subject: FC<Props> = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={!onPress}>
      <View style={[styles.container, {backgroundColor: randomColor()}]}>
        {/* <Image source={IMAGES.home_item} style={styles.image} /> */}
        <Icons.Microscope width={68} height={68} />
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
    fontFamily: FONTS.RobotoMedium,
    color: COLORS.primary_text,
    textAlign: 'center',
    marginTop: 5,
  },
});
