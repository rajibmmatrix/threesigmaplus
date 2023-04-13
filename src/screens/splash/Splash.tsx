import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
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
      <Text style={styles.title}>Splash Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000000',
  },
});
