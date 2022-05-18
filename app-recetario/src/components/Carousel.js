import react from "react";
import ListItem from "../components/ListItem";
import { StyleSheet, Text, View, FlatList } from 'react-native';




const Carousel = (props)=>{
    return(
        <View>
        <Text>{props.title}</Text>
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

export default Carousel;