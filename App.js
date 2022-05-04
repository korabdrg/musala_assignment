/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {useColorScheme} from 'react-native';
import MyStack from './src/navigation/MainTabNavigator';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark'; //for darkmode

  return (
    // <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    <MyStack />
  );
};

export default App;
