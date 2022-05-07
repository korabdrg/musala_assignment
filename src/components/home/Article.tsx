import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from '../../css/Home/Home';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

type Data = {
  item: {urlToImage: string; title: string; description: string};
  isDark: string;
  navigation: NavigationProp<ParamListBase>;
};

const Article: React.FC<Data> = ({item, isDark, navigation}) => {
  return (
    <View style={styles.articleWrapper}>
      <Image source={{uri: item.urlToImage}} style={styles.articleImage} />
      <View style={styles.articleTextWrapper}>
        <Text
          onPress={() => navigation.navigate('ArticleDetailView', {item: item})}
          style={[styles.articleTitle, isDark && styles.darkArticleTitle]}>
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
