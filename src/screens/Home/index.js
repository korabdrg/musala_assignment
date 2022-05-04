import React from 'react';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as newsActions from '../../store/actions/news';
// const dispatch = useDispatch();
const Home = () => {
  return (
    <View style={{backgroundColor: 'red', height: 100}}>
      <Text>'Home'</Text>
    </View>
  );
};

export default Home;
