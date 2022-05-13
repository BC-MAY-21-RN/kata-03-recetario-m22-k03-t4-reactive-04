import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

import Search from '../components/Search';
import Carousel from '../components/Carousel';

export default function HomeScreen({navigation}) {
  return (
   <View>
       <Search/>
       <Carousel title="Trending"/>
       <Carousel title="Recent"/>
        <TouchableHighlight onPress={()=>navigation.navigate('Prueba')}>
        <Text>ir a prueba</Text>
        </TouchableHighlight>
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

