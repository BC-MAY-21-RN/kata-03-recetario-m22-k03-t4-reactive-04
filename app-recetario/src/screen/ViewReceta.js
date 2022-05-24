import React from 'react';
import {Text,View,ImageBackground,FlatList, StyleSheet} from 'react-native';
import { useNavigation ,useRoute} from '@react-navigation/native';
import ListIngredients from '../components/ListIngredients';

import TouchBar from '../components/TouchBar';
import RecetaHeader from '../components/RecetaHeader';
import RecetaBody from '../components/RecetaBody';
import { Button } from 'react-native-elements';



export default function ViewReceta() {

  let array = [];

    const route = useRoute()
   ///console.log(route.params.item)
    array.push(route.params.item.id)
    console.log(array)
    ///const {image , name } = route.params.item;
    return (
        <View style={styles.container}>  
            <RecetaHeader style={styles.header} title={route.params.item.name} imagen={route.params.item.image } />
            <RecetaBody style={styles.body} data={route.params.item.ingredients}/>
        </View>
    );
}

const styles = StyleSheet.create({
      container: {
        flex:1,
        backgroundColor: 'rgb(59,62,66)',
        
      },
      header: {
       flex:1,
        height:300,
        backgroundColor: "yellow",    
      },
      body: {
        flex:1,
         backgroundColor: "red",
         height:300,
       },
     
      
      
})

/// backgroundColor: 'rgb(59,62,66)',

///<Image style={styles.image} source={require(`../image/${route.params.item.image}`)}></Image>
