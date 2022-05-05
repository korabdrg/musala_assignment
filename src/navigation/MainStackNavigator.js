import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ArticleDetailView from '../screens/Home/ArticleDetailScreen';
import {NavigationContainer} from '@react-navigation/native';
import MainTab from './MainTabNavigator';
const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
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
