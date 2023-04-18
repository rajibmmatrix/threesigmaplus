import React, {FC, memo, useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '~constants';
import {StackScreenProps} from 'types';

interface Props {
  uri: string;
  style?: ViewStyle;
}

const ZoomImage: FC<Props> = ({uri, style}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Zoom', {image: uri});
  };

  return (
    <TouchableOpacity onPress={handlePress} style={[styles.image, style]}>
      <Image source={{uri: uri}} style={styles.image} resizeMode="contain" />
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
        <Text style={styles.closeTitle}>Close</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIsPortrait(p => !p)}>
        <Text style={styles.button}>hi</Text>
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
    position: 'absolute',
    color: COLORS.light,
    right: 10,
    bottom: 10,
  },
  close: {
    position: 'absolute',
    color: COLORS.light,
    right: 10,
    top: 10,
  },
  closeTitle: {
    fontSize: 16,
    color: COLORS.light,
  },
});
