import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  articleWrapper: {alignItems: 'center', height: '100%'},
  darkArticleWrapper: {
    backgroundColor: '#1e1c1c',
  },
  backButton: {
    alignSelf: 'flex-start',
    margin: 10,
    fontWeight: '600',
    color: '#5e5959',
  },
  darkText: {
    color: 'white',
  },
  articleImage: {
    width: '100%',
    height: '20%',
  },
  articleTitle: {
    fontSize: 17,
    fontWeight: '700',
    marginTop: 15,
  },
  articleAuthor: {
    fontSize: 13,
    fontWeight: '500',
    alignSelf: 'flex-start',
    marginTop: 15,
    color: '#5e5959',
  },
  articleContent: {
    fontSize: 15,
    fontWeight: '400',
    marginTop: 10,
    color: '#232222',
  },
  contentWrapper: {
    margin: 10,
  },
  scrollViewWrapper: {
    height: '100%',
  },
});

export default styles;
