import React, {useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {IMAGES} from '~constants';
import {setToken, setUser, useDispatch} from '~app';
import {useLazyGetProfileQuery} from '~services';
import {storage} from '~utils';

type Props = {
  onFinished: () => void;
};

export default function SplashScreen({onFinished}: Props): JSX.Element {
  const dispatch = useDispatch();
  const [getProfile] = useLazyGetProfileQuery();

  useEffect(() => {
    (async () => {
      try {
        const token = await storage.getToken();
        if (token) {
          await dispatch(setToken(token));
          await getProfile()
            .unwrap()
            .then(res => dispatch(setUser(res)));
        }
        onFinished();
      } catch (error) {
        onFinished();
        console.log(error);
      }
    })();
    return () => {};
  }, [dispatch, getProfile, onFinished]);

  return (
    <View style={styles.container}>
      <Image source={IMAGES.splash} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
