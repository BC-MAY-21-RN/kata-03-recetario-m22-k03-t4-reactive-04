import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableHighlight ,FlatList, Image} from 'react-native';
import Search from '../components/Search';
import Carousel from '../components/Carousel';

import Recetario from '../data/recetario.json'

export default function HomeScreen({navigation}) {
  return (
   <View style={styles.container}>
      <Search/> 
       <Carousel title="Trending" data={Recetario} />
       <Carousel title="Recent"/> 
   </View> 
   
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgb(58,62,66)',
      width: '100%',
      height: '100%'
    }
   
  });
