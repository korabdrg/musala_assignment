import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  RefreshControl,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Linking,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as newsActions from '../../store/actions/news';
import styles from '../../css/Home/Home';
import Article from '../../components/home/Article';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {useDarkMode} from '../../hooks/isDarkMode';
import {languageChooser} from '../../hooks/languageChooser';
import {useTranslation} from 'react-i18next';

const Home = props => {
  const [searchValue, setSearchValue] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();
  const articles: readonly IArticle[] = useSelector(
    (state: ArticleState) => state.news.articles,
  );
  const isDark: DarkMode = useSelector(
    (state: DarkModeColor) => state.general.color,
  );
  const isDarkMode = useDarkMode();
  const language = languageChooser();
  const {t} = useTranslation(); //i18n instance

  useEffect(() => {
    dispatch(newsActions.getNews());
    Linking.addEventListener(
      'url',
      ({url}) =>
        url == 'deeplinking://articles/1' &&
        props.navigation.navigate('ArticleDetailView', {item: articles[0]}),
    );
  }, []);

  const searchButtonClicked = () => {
    if (searchValue == '') {
      dispatch(newsActions.getNews());
      return;
    }
    let filteredNews = articles.filter(t => t.title.includes(searchValue));
    dispatch(newsActions.newsFiltered(filteredNews));
  };

  const handleInputChange = e => {
    if (e == '') {
      setSearchValue(e);
      dispatch(newsActions.getNews()); //this action is called here because it's a local search and not an API search
    } else {
      setSearchValue(e);
    }
  };

  const onRefreshPull = () => {
    dispatch(newsActions.getNews());
    setSearchValue('');
  };
  return (
    <SafeAreaView style={isDark ? styles.darkContainer : styles.container}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      <ScrollView
        refreshControl={
          <RefreshControl
            onRefresh={() => onRefreshPull()}
            refreshing={refreshing}
          />
        }>
        <View style={styles.searchWrapper}>
          <TextInput
            placeholder={t('search')}
            value={searchValue}
            style={[isDark && styles.darkSearchBar, styles.searchBar]}
            onChangeText={e => handleInputChange(e)}
          />
          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => searchButtonClicked()}>
            <Text style={styles.searchButtonText}>{t('search')}</Text>
          </TouchableOpacity>
        </View>
        {articles.length > 0 ? (
          articles.map((item, index) => {
            return (
              <Article
                navigation={props.navigation}
                item={item}
                key={index}
                isDark={isDark}
              />
            );
          })
        ) : (
          <Text
            style={[isDark && styles.darkArticleTitle, styles.noResultsText]}>
            No results match your query. Try something different.
          </Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
