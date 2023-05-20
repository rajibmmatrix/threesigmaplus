import React from 'react';
import {NativeModules} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import Navigation from './navigations';
import {store} from './app/store';

if (__DEV__ && false) {
  NativeModules.DevSettings.setIsDebuggingRemotely(true);
}

export default function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </SafeAreaProvider>
  );
}
