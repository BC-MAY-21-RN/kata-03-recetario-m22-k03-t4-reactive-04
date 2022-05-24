import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableHighlight ,FlatList, Image} from 'react-native';
import Search from '../components/Search';
import Carousel from '../components/Carousel';

import Recetario from '../data/recetario.json'

import ViewReceta from './ViewReceta';



function isRecent(){

  let arr = [1,2,3]

  let array = [];
      //console.log(Recetario);
      Recetario.map(function(index,id){

        for (let i = 0; i < arr.length; i++) {
            if(id==arr[i]){
              array.push(index);
            }
          
        }

       
      })
     console.log(array); 

     return array;
}



export default function HomeScreen({navigation}) {
  let arrayRecent= isRecent();
  return (
   <View style={styles.container}>
      <Search/> 
       <Carousel title="Trending" data={Recetario} />
       <Carousel title="Recent" data={arrayRecent}/> 
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

