import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  buttonWrapper: {
    height: 30,
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginVertical: 10,
    borderWidth: 0.4,
  },
  darkButtonWrapper: {
    borderColor: 'white',
  },
  title: {
    fontWeight: '600',
  },
  optionText: {
    fontSize: 15,
  },
  touchableWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainWrapper: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
  whiteText: {
    color: 'white',
  },
});

export default styles;
