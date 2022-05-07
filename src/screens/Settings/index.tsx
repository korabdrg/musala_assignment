import React from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as generalActions from '../../store/actions/general';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import ButtonsToggle from '../../components/settings/ButtonsToggle';
import styles from '../../css/Settings/Settings';

const Settings = () => {
  const dispatch = useDispatch();
  const isDark: DarkMode = useSelector(
    (state: DarkModeColor) => state.general.color,
  );
  const handleDarkMode = (color: string) => {
    AsyncStorage.setItem('colorScheme', color);
    dispatch(generalActions.getDarkModePreference(color));
  };

  const {i18n, t} = useTranslation(); //i18n instance

  const languageButtonPress = lang => {
    AsyncStorage.setItem('selectedLanguage', lang);
    i18n.changeLanguage(lang);
  };

  return (
    <View style={[styles.mainWrapper, isDark && styles.darkMainWrapper]}>
      <Text style={[styles.generalSettingsText, isDark && styles.whiteText]}>
        {t('general_settings')}
      </Text>
      <ButtonsToggle
        title={t('choose_appearance')}
        firstOption={t('dark')}
        secondOption={t('light')}
        firstButtonPress={() => handleDarkMode('dark')}
        secondButtonPress={() => handleDarkMode('white')}
        isDarkMode={isDark}
      />

      <ButtonsToggle
        title={t('choose_language')}
        firstOption={t('albanian')}
        secondOption={t('english')}
        firstButtonPress={() => languageButtonPress('al')}
        secondButtonPress={() => languageButtonPress('en')}
        isDarkMode={isDark}
      />
    </View>
  );
};

export default Settings;
