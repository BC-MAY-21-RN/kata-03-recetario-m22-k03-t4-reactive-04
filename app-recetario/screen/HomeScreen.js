import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableHighlight ,FlatList} from 'react-native';

import Search from '../components/Search';
import Carousel from '../components/Carousel';


const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);


export default function HomeScreen({navigation}) {
 
  const [recetas,setRecetas]=useState([]);

 
  useEffect(function() {
    async function fetchData(){
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1/todos');
      const json = await response.json(); 
      setRecetas(json);    
    }
    fetchData();
    
  },[]);

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
  return (
   <View>
      <Search/> 
       <Carousel title="Trending"/>
       <Carousel title="Recent"/>
       <FlatList
        data={recetas}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
     {/*<TouchableHighlight onPress={()=>navigation.navigate('Prueba')}>  <Text>ir a prueba</Text> </TouchableHighlight>*/}
       
     {console.log(recetas)}
       
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

