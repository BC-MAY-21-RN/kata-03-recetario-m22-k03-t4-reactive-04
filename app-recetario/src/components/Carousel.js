import React from "react";
import ListItem from "../components/ListItem";
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { fonts } from "react-native-elements/dist/config";




const Carousel = (props)=>{
    return(
        <View>
        <Text style={styles.title}>{props.title}</Text>
        <FlatList
        data={props.data}
        keyExtractor={(item) => item.id}
        pagingEnabled={true}
        horizontal={true}
        showsHorizontalScrollIndicator={false}

        renderItem={({item,index})=>
        <ListItem item={item} />}

      />
      </View>
        
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea"
  },
  title :{
    color: 'rgb(198,50,110)',
    fontSize:25,
    textTransform: 'uppercase',
  }
  
});

export default Carousel;