import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';
import {Container, _styles} from '~components';
import {Icons} from '~constants';
import {setToken, setUser, useDispatch} from '~app';
import {useLazyGetProfileQuery} from '~services';
import {delay, storage} from '~utils';
import {StackScreenProps} from 'types';

export default function SplashScreen({navigation}: StackScreenProps<'Splash'>) {
  const dispatch = useDispatch();
  const [getProfile] = useLazyGetProfileQuery();
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [opacity]);

  useEffect(() => {
    (async () => {
      try {
        await delay(3);
        const token = await storage.getToken();
        if (token) {
          await dispatch(setToken(token));
          return await getProfile()
            .unwrap()
            .then(res => {
              dispatch(setUser(res));
              navigation.replace('Tab');
            });
        }
        navigation.replace('Login');
      } catch (error) {
        navigation.replace('Login');
      }
    })();
    return () => {};
  }, [dispatch, getProfile, navigation]);

  return (
    <Container scrollEnabled={false}>
      <Animated.View style={[_styles.flex, _styles.allCenter, {opacity}]}>
        <Icons.Logo width={220} height={175} />
      </Animated.View>
    </Container>
  );
}
