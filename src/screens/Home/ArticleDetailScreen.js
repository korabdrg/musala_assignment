import React from 'react';
import {View, Image, Text, ScrollView, SafeAreaView} from 'react-native';
import styles from '../../css/ArticleDetailView';
import {useSelector} from 'react-redux';

const ArticleDetailScreen = ({route, navigation}) => {
  let {item} = route.params;
  const general = useSelector(state => state.general);
  return (
    <View
      style={general.color ? styles.darkArticleWrapper : styles.articleWrapper}>
      <Text
        onPress={() => navigation.goBack()}
        style={[styles.backButton, general.color && styles.darkText]}>
        Back
      </Text>
      <Image source={{uri: item.urlToImage}} style={styles.articleImage} />
      <View style={styles.scrollViewWrapper}>
        <ScrollView contentContainerStyle={styles.contentWrapper}>
          <Text style={[styles.articleTitle, general.color && styles.darkText]}>
            {item.title}
          </Text>
          <Text
            style={[styles.articleAuthor, general.color && styles.darkText]}>
            Author: {item.author}
          </Text>
          <Text
            style={[styles.articleContent, general.color && styles.darkText]}>
            {item.content}
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default ArticleDetailScreen;
