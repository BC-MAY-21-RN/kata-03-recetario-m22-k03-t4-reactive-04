import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

import Search from '../components/Search';
import Carousel from '../components/Carousel';

const HomeScreen = () => {
  return (
   <View>
       <Search/>
       <Carousel title="Trending"/>
       <Carousel title="Recent"/>

   </View> 
   
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default HomeScreen;