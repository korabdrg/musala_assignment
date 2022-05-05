import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTranslation} from 'react-i18next';

export const languageChooser = () => {
  const [language, setLanguage] = useState('');
  const {i18n, t} = useTranslation();
  useEffect(() => {
    fn();
  }, []);

  const fn = async () => {
    try {
      const selectedLanguage = await AsyncStorage.getItem('selectedLanguage');
      i18n.changeLanguage(selectedLanguage);
    } catch (e) {
      i18n.changeLanguage('en');
    }
  };

  return language;
};
