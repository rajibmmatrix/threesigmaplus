import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './AppNavigation';
import AuthNavigation from './AuthNavigation';
import {SplashScreen} from '~screens';
import {useAuth} from '~app';

export default function Navigation(): JSX.Element {
  const auth = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return (
      <SplashScreen
        onFinished={() => {
          setIsLoading(false);
        }}
      />
    );
  }

  return (
    <NavigationContainer>
      {auth.user ? <AppNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
}
