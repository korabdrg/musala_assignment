import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as generalActions from '../store/actions/general';
import {useDispatch, useSelector} from 'react-redux';

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    fn();
  }, []);

  const fn = async () => {
    let resp = false;
    try {
      const userColorScheme = await AsyncStorage.getItem('colorScheme');
      resp = userColorScheme === 'dark';
      dispatch(generalActions.getDarkModePreference(userColorScheme));
    } catch (e) {
      resp = false;
    }

    setIsDarkMode(resp);
  };

  return isDarkMode;
};
