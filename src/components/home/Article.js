import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from '../../css/Home';

const Article = props => {
  let {item, isDark} = props;
  return (
    <View style={styles.articleWrapper}>
      <Image source={{uri: item.urlToImage}} style={styles.articleImage} />
      <View style={styles.articleTextWrapper}>
        <Text style={[styles.articleTitle, isDark && styles.darkArticleTitle]}>
          {item.title}
        </Text>
        <Text
          style={[
            styles.articleDescription,
            isDark && styles.darkArticleTitle,
          ]}>
          {item.description.slice(0, 150) + '...'}
        </Text>
      </View>
    </View>
  );
};

export default Article;
