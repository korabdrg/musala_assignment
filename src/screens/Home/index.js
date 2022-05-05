import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  RefreshControl,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as newsActions from '../../store/actions/news';
import styles from '../../css/Home/Home';
import Article from '../../components/home/Article';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {useDarkMode} from '../../hooks/isDarkMode';

const Home = props => {
  const [searchValue, setSearchValue] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();
  const news = useSelector(state => state.news.news);
  const general = useSelector(state => state.general);
  const isDarkMode = useDarkMode();

  useEffect(() => {
    dispatch(newsActions.getNews());
  }, []);

  const searchButtonClicked = () => {
    if (searchValue == '') {
      dispatch(newsActions.getNews());
      return;
    }
    let filteredNews = news.filter(t => t.title.includes(searchValue));
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
    <ScrollView
      style={general.color ? styles.darkContainer : styles.container}
      refreshControl={
        <RefreshControl
          onRefresh={() => onRefreshPull()}
          refreshing={refreshing}
        />
      }>
      <View style={styles.searchWrapper}>
        <TextInput
          placeholder="Search..."
          value={searchValue}
          style={[general.color && styles.darkSearchBar, styles.searchBar]}
          onChangeText={e => handleInputChange(e)}
        />
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => searchButtonClicked()}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
      {news.length > 0 ? (
        news.map((item, index) => {
          return (
            <Article
              navigation={props.navigation}
              item={item}
              key={index}
              isDark={general.color}
            />
          );
        })
      ) : (
        <Text
          style={[
            general.color && styles.darkArticleTitle,
            styles.noResultsText,
          ]}>
          No results match your query. Try something different.
        </Text>
      )}
    </ScrollView>
  );
};

export default Home;
