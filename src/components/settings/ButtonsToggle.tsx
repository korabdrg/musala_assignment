import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from '../../css/Settings/ButtonsToggle';

type Data = {
  title: string;
  firstOption: string;
  secondOption: string;
  firstButtonPress: (event: React.MouseEvent<HTMLButtonElement>) => void;
  secondButtonPress: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isDarkMode: boolean;
};
const ButtonsToggle: React.FC<Data> = ({
  title,
  firstOption,
  secondOption,
  firstButtonPress,
  secondButtonPress,
  isDarkMode,
}) => {
  return (
    <View style={styles.mainWrapper}>
      <Text style={[styles.title, isDarkMode && styles.whiteText]}>
        {title}
      </Text>
      <View style={styles.touchableWrapper}>
        <TouchableOpacity
          onPress={firstButtonPress}
          style={[
            styles.buttonWrapper,
            isDarkMode && styles.darkButtonWrapper,
          ]}>
          <Text style={[styles.optionText, isDarkMode && styles.whiteText]}>
            {firstOption}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={secondButtonPress}
          style={[
            styles.buttonWrapper,
            isDarkMode && styles.darkButtonWrapper,
          ]}>
          <Text style={[styles.optionText, isDarkMode && styles.whiteText]}>
            {secondOption}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ButtonsToggle;
