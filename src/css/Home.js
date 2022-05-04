import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  articleDescription: {
    fontSize: 11,
    fontWeight: '200',
    color: 'black',
  },
});

export default styles;
