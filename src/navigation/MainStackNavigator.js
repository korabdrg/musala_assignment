import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ArticleDetailView from '../screens/Home/ArticleDetailScreen';
import {NavigationContainer} from '@react-navigation/native';
import MainTab from './MainTabNavigator';

const Stack = createStackNavigator();

export default function StackNavigator() {
  const config = {
    screens: {
      Article: {
        path: 'articles/1',
      },
    },
  };
  const linking = {
    prefixes: ['deeplinking://', 'deeplinking://articles'],
    config,
  };
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="MainTab"
          component={MainTab}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ArticleDetailView"
          component={ArticleDetailView}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
