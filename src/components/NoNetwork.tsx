import React, {FC, memo, useEffect, useState} from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {COLORS, FONTS, IMAGES} from '~constants';
import {sheight, swidth} from '~utils';

const NoNetwork: FC = () => {
  const [isNetAvailable, setIsNetAvailable] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsNetAvailable(!state?.isConnected);
    });

    return () => unsubscribe();
  }, []);

  if (isNetAvailable) {
    return (
      <View style={styles.container}>
        <Image source={IMAGES.no_wifi} style={styles.image} />
        <Text style={styles.title}>No Network</Text>
      </View>
    );
  }

  return null;
};

export default memo(NoNetwork);

const styles = StyleSheet.create({
  container: {
    width: swidth,
    height: sheight,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  image: {
    width: 128,
    height: 128,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    fontFamily: FONTS.RobotoBold,
    color: COLORS.light,
    lineHeight: 21,
    letterSpacing: 2,
    textAlign: 'center',
    paddingVertical: 15,
  },
});
