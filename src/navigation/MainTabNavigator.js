import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import {useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();

export default function MyStack() {
  const general = useSelector(state => state.general);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: general.color ? '#1e1c1c' : '#fff',
        },
      }}>
      <Tab.Screen options={{headerShown: false}} name="Home" component={Home} />
      <Tab.Screen
        options={{headerShown: false}}
        name="Settings"
        component={Settings}
      />
    </Tab.Navigator>
  );
}
