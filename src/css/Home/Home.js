import React from 'react';
import {StyleSheet, Appearance} from 'react-native';

const isDarkMode = true;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 70,
  },
  darkContainer: {
    backgroundColor: '#1e1c1c',
  },
  articleWrapper: {
    flexDirection: 'row',
    margin: 5,
    borderBottomWidth: 0.3,
    borderBottomColor: '#8a8a8a',
    paddingVertical: 10,
  },
  articleImage: {
    height: 100,
    width: 100,
    marginRight: 10,
    borderRadius: 5,
  },
  articleTextWrapper: {
    flexDirection: 'column',
    flexShrink: 1,
  },
  articleTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#1e1c1c',
    marginBottom: 5,
  },
  darkArticleTitle: {
    color: '#fff',
  },
  articleDescription: {
    fontSize: 11,
    fontWeight: '200',
    color: 'black',
  },
  searchBar: {
    height: 35,
    width: '50%',
    alignSelf: 'center',
    borderWidth: 0.5,
    borderColor: '#1e1c1c',
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 3,
    marginTop: 10,
  },
  darkSearchBar: {
    borderColor: '#fff',
  },
  searchButton: {
    backgroundColor: '#0d77a0',
    width: '30%',
    height: 30,
    alignSelf: 'center',
    marginTop: 10,
    textAlign: 'center',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchButtonText: {
    color: 'white',
  },
  searchWrapper: {
    marginBottom: 30,
  },
  noResultsText: {
    alignSelf: 'center',
  },
});

export default styles;
