import React, {FC, memo} from 'react';
import type {ImageResizeMode} from 'react-native';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {Image} from '~common';
import {IMAGES} from '~constants';

interface Props {
  size?: number;
  url?: string;
  style?: ViewStyle;
  resizeMode?: ImageResizeMode;
}

const Avatar: FC<Props> = ({size, url, style, resizeMode = 'cover'}) => {
  const sizes = size ? {height: size, width: size} : {};

  return (
    <View style={[styles.container, style, sizes]}>
      <Image
        uri={url}
        source={IMAGES.avatar}
        resizeMode={resizeMode}
        style={styles.image}
      />
    </View>
  );
};

export default memo(Avatar);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
});
