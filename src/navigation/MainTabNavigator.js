import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';

const Tab = createBottomTabNavigator();

export default function MyStack() {
  const general = useSelector(state => state.general);
  const {t} = useTranslation(); //i18n instance
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: general.color ? '#1e1c1c' : '#fff',
        },
      }}>
      <Tab.Screen
        options={{headerShown: false}}
        name={t('home')}
        component={Home}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name={t('settings')}
        component={Settings}
      />
    </Tab.Navigator>
  );
}
