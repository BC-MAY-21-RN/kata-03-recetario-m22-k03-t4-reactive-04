import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableHighlight ,FlatList} from 'react-native';

import Search from '../components/Search';
import Carousel from '../components/Carousel';
import ListItem from '../components/ListItem';


export default function HomeScreen({navigation}) {
  
  const array = [
    {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
    },
    {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
    },
    {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
    },
    {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
    }]


  const [recetas,setRecetas]=useState([]);

 
  useEffect(function() {
    async function fetchData(){
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1/todos');
      const json = await response.json(); 
      setRecetas(json);    
    }
    fetchData();
    
  },[]);

 
  return (
   <View>
      <Search/> 
       <Carousel title="Trending"/>
       <Carousel title="Recent"/>
       <FlatList
        data={recetas}
        keyExtractor={(item) => item.id}
        pagingEnabled={true}
        horizontal={true}
        showsHorizontalScrollIndicator={false}

        renderItem={({item,index})=>
        <ListItem item={item} />}

      />
     
       
    
       
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

