/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import Orientation from 'react-native-orientation';
import 'react-native-gesture-handler';
import SplashScreen from './src/screens/splash-screen';
import RootNavigationStack from './src/navigation';
import {Provider as StoreProvider} from 'react-redux';
import store from './src/shared/sagas';

const App: () => React$Node = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const performTimeConsumingTask = async () => {
      return new Promise((resolve) =>
        setTimeout(() => {
          resolve('result');
        }, 5000),
      );
    };
    // this locks the view to Portrait Mode
    // Orientation.lockToPortrait();
    // this locks the view to Landscape Mode
    Orientation.lockToLandscape();
    // this unlocks any previous locks to all Orientations
    // Orientation.unlockAllOrientations();
    Orientation.addOrientationListener(orientationDidChange);
    performTimeConsumingTask().then((data) => {
      if (data !== null) {
        setLoading(false);
      }
    });
    return () => {
      Orientation.getOrientation((err, orientation) => {
        console.log(`Current Device Orientation: ${orientation}`);
      });

      // Remember to remove listener
      Orientation.removeOrientationListener(orientationDidChange);
    };
  }, []);
  const orientationDidChange = (orientation) => {
    if (orientation === 'LANDSCAPE') {
      // do something with landscape layout
    } else {
      // do something with portrait layout
    }
  };

  if (isLoading) {
    return <SplashScreen />;
  }
  return (
    <>
      <StatusBar barStyle="light-content" />
      <StoreProvider store={store}>
        <RootNavigationStack />
      </StoreProvider>
    </>
  );
};

export default App;
