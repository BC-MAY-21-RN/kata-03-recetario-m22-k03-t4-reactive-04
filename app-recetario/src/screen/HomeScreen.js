import React from 'react';
import { StyleSheet, View} from 'react-native';
import Search from '../components/Search';
import Carousel from '../components/Carousel';

import Recetario from '../data/recetario.json'

export default function HomeScreen() {
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
      backgroundColor: '#343435',
      width: '100%',
      height: '100%'
    }
   
  });

