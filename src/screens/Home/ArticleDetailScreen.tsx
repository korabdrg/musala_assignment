import React from 'react';
import {View, Image, Text, ScrollView, SafeAreaView} from 'react-native';
import styles from '../../css/Home/ArticleDetailView';
import {useSelector} from 'react-redux';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

type Data = {
  navigation: NavigationProp<ParamListBase>;
  route: {
    params: {
      item: {
        title: string;
        urlToImage: string;
        author: string;
        content: string;
      };
    };
  };
};

const ArticleDetailScreen: React.FC<Data> = ({route, navigation}) => {
  let {item} = route.params;

  const isDark: DarkMode = useSelector(
    (state: DarkModeColor) => state.general.color,
  );
  const general = {
    color: true,
  };

  // const pressLink = async url => {
  //   const supported = await Linking.canOpenURL(url);
  //   if (supported) {
  //     await Linking.openURL(url);
  //   } else {
  //     Alert.alert(`Don't know how to open this URL: ${url}`);
  //   }
  // };

  return (
    <SafeAreaView
      style={isDark ? styles.darkArticleWrapper : styles.articleWrapper}>
      <Text
        onPress={() => navigation.goBack()}
        style={[styles.backButton, isDark && styles.darkText]}>
        Back
      </Text>
      <Image source={{uri: item.urlToImage}} style={styles.articleImage} />
      <View style={styles.scrollViewWrapper}>
        <ScrollView contentContainerStyle={styles.contentWrapper}>
          <Text style={[styles.articleTitle, isDark && styles.darkText]}>
            {item.title}
          </Text>
          <Text style={[styles.articleAuthor, isDark && styles.darkText]}>
            Author: {item.author}
          </Text>
          <Text style={[styles.articleContent, isDark && styles.darkText]}>
            {item.content}
          </Text>
          {/* <Text style={styles.linkText} onPress={() => pressLink(item.url)}>
            Read it on your default browser
          </Text> */}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ArticleDetailScreen;
