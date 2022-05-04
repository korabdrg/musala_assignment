import React, {useState, useEffect} from 'react';
import {Text, View, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as newsActions from '../../store/actions/news';
import styles from '../../css/Home';
import Article from '../../components/home/Article';

const Home = () => {
  const dispatch = useDispatch();
  const news = useSelector(state => state.news.news);

  useEffect(() => {
    dispatch(newsActions.getNews());
  }, []);

  return (
    <View style={styles.container}>
      {news?.map((item, index) => {
        return <Article item={item} index={index} />;
      })}
    </View>
  );
};

export default Home;
