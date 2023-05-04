import React, {FC, memo, useState} from 'react';
import {
  StyleSheet,
  Image as RNImage,
  View,
  ImageStyle,
  ImageResizeMode,
} from 'react-native';
import {COLORS, IMAGES} from '~constants';

interface Props {
  source?: any;
  uri?: string;
  style?: ImageStyle;
  resizeMode?: ImageResizeMode;
}

const Image: FC<Props> = ({source, uri, style, resizeMode = 'contain'}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <View style={[styles.cover, style]} />}
      <RNImage
        source={uri ? {uri} : source ? source : IMAGES.logo}
        resizeMode={resizeMode}
        onLoadEnd={() => setIsLoading(false)}
        style={[styles.image, style, isLoading && styles.hide]}
      />
    </>
  );
};

export default memo(Image);

const styles = StyleSheet.create({
  cover: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.secondary_gray,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  hide: {
    position: 'absolute',
    backfaceVisibility: 'hidden',
  },
});
