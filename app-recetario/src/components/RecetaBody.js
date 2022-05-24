import React from "react";
import { View, Text, StyleSheet,FlatList} from "react-native";
import ListIngredients from '../components/ListIngredients';
const RecetaBody= (props) => {

    
    const {data} = props;

   
    return (
        <View style={styles.container}>
             <Text style={styles.title}>ingredients</Text>
            <Text style={styles.subtitle}>for 3 servings</Text>
           <FlatList style={styles.lista}
            data={data}
            keyExtractor={(item) => item.name}
            pagingEnabled={true}
            renderItem={({item,index})=>
          <ListIngredients item={item} />}

      />
        </View>
        
    );
};


const styles = StyleSheet.create({
    container: {
      flex:2,
      backgroundColor: '#343435',
      
    },
    title: {
      fontSize:30,
      color:"white",
      marginLeft:20
    },
    subtitle: {
      fontSize:24,
      color:"white",
      marginLeft:20
    },
    image: {
      width: "auto",
     flex:1,
      borderRadius:10,
      backgroundColor: "#afaef5",
      
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

export default RecetaBody;
