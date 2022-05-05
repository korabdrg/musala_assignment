import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as generalActions from '../../store/actions/general';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import ButtonsToggle from '../../components/settings/ButtonsToggle';
import styles from '../../css/Settings/Settings';

const Settings = () => {
  const dispatch = useDispatch();
  const general = useSelector(state => state.general);
  const handleDarkMode = color => {
    AsyncStorage.setItem('colorScheme', color);
    dispatch(generalActions.getDarkModePreference(color));
  };

  const {i18n, t} = useTranslation(); //i18n instance

  return (
    <View style={[styles.mainWrapper, general.color && styles.darkMainWrapper]}>
      <Text
        style={[styles.generalSettingsText, general.color && styles.whiteText]}>
        {t('general_settings')}
      </Text>
      <ButtonsToggle
        title={t('choose_appearance')}
        firstOption={t('dark')}
        secondOption={t('light')}
        firstButtonPress={() => handleDarkMode('dark')}
        secondButtonPress={() => handleDarkMode('white')}
        isDark={general.color}
      />

      <ButtonsToggle
        title={t('choose_language')}
        firstOption={t('albanian')}
        secondOption={t('english')}
        firstButtonPress={() => i18n.changeLanguage('al')}
        secondButtonPress={() => i18n.changeLanguage('en')}
        isDark={general.color}
      />
    </View>
  );
};

export default Settings;
