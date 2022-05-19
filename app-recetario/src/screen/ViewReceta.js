import React from 'react';
import {Text,View,Image,FlatList, StyleSheet} from 'react-native';
import { useNavigation ,useRoute} from '@react-navigation/native';
import ListIngredients from '../components/ListIngredients';
export default function ViewReceta() {
    const route = useRoute()
    console.log(route.params.item.ingredients)
    return (
        <View style={styles.container}>
           <Image
            style={styles.image}
            source={require(`../image/${route.params.item.image}`)}
           />   
            <Text>{route.params.item.name} </Text>
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
        
      },
      image: {
        width: 350,
        height: 400,
        borderRadius:10,
      },
})