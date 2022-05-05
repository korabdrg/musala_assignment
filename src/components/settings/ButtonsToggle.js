import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from '../../css/Settings/ButtonsToggle';

const ButtonsToggle = props => {
  const {
    title,
    firstOption,
    secondOption,
    firstButtonPress,
    secondButtonPress,
    isDark,
  } = props;
  return (
    <View style={styles.mainWrapper}>
      <Text style={[styles.title, isDark && styles.whiteText]}>{title}</Text>
      <View style={styles.touchableWrapper}>
        <TouchableOpacity
          onPress={firstButtonPress}
          style={[styles.buttonWrapper, isDark && styles.darkButtonWrapper]}>
          <Text style={[styles.optionText, isDark && styles.whiteText]}>
            {firstOption}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={secondButtonPress}
          style={[styles.buttonWrapper, isDark && styles.darkButtonWrapper]}>
          <Text style={[styles.optionText, isDark && styles.whiteText]}>
            {secondOption}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ButtonsToggle;
