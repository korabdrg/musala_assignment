import React from 'react';
import {useColorScheme, StatusBar, SafeAreaView} from 'react-native';
import MainTabNavigator from './src/navigation/MainTabNavigator';
import StackNavigator from './src/navigation/MainStackNavigator';
import {store} from './src/store/index';
import {Provider as ReduxProvider, useSelector} from 'react-redux';

const App: () => Node = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ReduxProvider store={store}>
        <StackNavigator />
      </ReduxProvider>
    </SafeAreaView>
  );
};

export default App;
