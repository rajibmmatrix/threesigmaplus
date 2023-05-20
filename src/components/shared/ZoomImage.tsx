import React, {FC, memo, useEffect, useState} from 'react';
import {
  ImageStyle,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import {useNavigation} from '@react-navigation/native';
import {Image} from '~common';
import {COLORS, Icons} from '~constants';
import {StackScreenProps} from 'types';

interface Props {
  uri?: string;
  source?: any;
  style?: ViewStyle;
  imageStyle?: ImageStyle;
}

const ZoomImage: FC<Props> = ({uri, source, style, imageStyle}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Zoom', {image: uri!});
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      disabled={!uri}
      style={[styles.image, style]}>
      <Image uri={uri} source={source} style={imageStyle} />
    </TouchableOpacity>
  );
};

export default memo(ZoomImage);

export function ZoomScreen({navigation, route}: StackScreenProps<'Zoom'>) {
  const uri = route.params?.image;
  const [isPortrait, setIsPortrait] = useState(true);

  useEffect(() => {
    navigation.setOptions({
      orientation: isPortrait ? 'portrait' : 'landscape_right',
    });
    return () => navigation.setOptions({orientation: 'portrait'});
  }, [isPortrait, navigation]);

  return (
    <View style={styles.container}>
      <ImageViewer
        imageUrls={[{url: uri ? uri : ''}]}
        renderIndicator={() => <></>}
        style={styles.image}
      />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.close}>
        <Icons.Close width={22} height={22} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setIsPortrait(p => !p)}
        style={styles.button}>
        <Icons.Rotate width={22} height={22} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.dark,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  button: {
    right: 10,
    bottom: 10,
    padding: 5,
    position: 'absolute',
    color: COLORS.light,
  },
  close: {
    top: 15,
    right: 12,
    padding: 2,
    position: 'absolute',
    color: COLORS.light,
    backgroundColor: COLORS.light,
    borderRadius: 50,
  },
});
