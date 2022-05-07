import React from 'react';
import {useColorScheme, StatusBar, SafeAreaView} from 'react-native';
import MainTabNavigator from './src/navigation/MainTabNavigator';
import StackNavigator from './src/navigation/MainStackNavigator';
import {store} from './src/store/index';
import {Provider as ReduxProvider, useSelector} from 'react-redux';
import './src/localization/i18n.config';

const App: () => Node = () => {
  return (
    <ReduxProvider store={store}>
      <StackNavigator />
    </ReduxProvider>
  );
};

export default App;
