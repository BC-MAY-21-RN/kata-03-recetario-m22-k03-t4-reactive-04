import React from 'react';
import {Text,View,ImageBackground,FlatList, StyleSheet} from 'react-native';
import { useNavigation ,useRoute} from '@react-navigation/native';
import ListIngredients from '../components/ListIngredients';

import TouchBar from '../components/TouchBar';

import Icon from 'react-native-vector-icons/FontAwesome';


export default function ViewReceta() {
    const route = useRoute()
    console.log(route.params.item.ingredients)
    return (
        <View style={styles.container}>
            
           

          <ImageBackground style={styles.image}
            source={require(`../image/${route.params.item.image}`)}>
            <TouchBar></TouchBar>   
          </ImageBackground>
            


          <Text style={styles.text}>{route.params.item.name} </Text>
          <FlatList
            data={route.params.item.ingredients}
            keyExtractor={(item) => item.name}
            pagingEnabled={true}
            renderItem={({item,index})=>
          <ListIngredients item={item} />}
          

      />
          
        </View>
    );
}

const styles = StyleSheet.create({
      container: {
        backgroundColor: 'rgb(59,62,66)',
        flex:1,
      },
      image: {
        width: '100%',
        height: 500,
        borderRadius:10,  
      },
      button: {
        fontSize:30,
        color:'red',
  
      },

      
      iconButton: {
        position:"absolute",
        fontSize:30,
        color:'red',
      },
})