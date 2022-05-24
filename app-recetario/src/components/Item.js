import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";



const Item = ({ item }) => {
  const {  name, image } = item;
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require(`../image/${image}`)}
      />   
        <Text style={styles.texto}>{name} </Text> 
    </View>
  );
};

export default Item;


const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    justifyContent: "center",
    width: 150,
    height: 150,
    alignItems:"center",

  },
  image: {
    width: 140,
    height: 120,
    borderRadius:10,
  },
  texto: {
    color: "white",
    maxWidth:100,
    textAlign: "center",
    fontSize:15,
    paddingTop:10
    
  },
});