import React from 'react';
import {useColorScheme} from 'react-native';
import MyStack from './src/navigation/MainTabNavigator';
import {store} from './src/store/index';
import {Provider as ReduxProvider} from 'react-redux';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark'; //for darkmode

  return (
    // <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    <ReduxProvider store={store}>
      <MyStack />
    </ReduxProvider>
  );
};

export default App;
