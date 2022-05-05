import React from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as generalActions from '../../store/actions/general';
import {useDispatch, useSelector} from 'react-redux';

const Settings = () => {
  const dispatch = useDispatch();
  const handleDarkMode = color => {
    AsyncStorage.setItem('colorScheme', color);
    dispatch(generalActions.getDarkModePreference(color));
  };
  return (
    <View style={{marginTop: 50}}>
      <Text onPress={() => handleDarkMode('dark')}>DARK</Text>
      <Text onPress={() => handleDarkMode('white')}>WHITE</Text>
    </View>
  );
};

export default Settings;
