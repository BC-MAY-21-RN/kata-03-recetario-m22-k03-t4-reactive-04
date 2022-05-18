import react from "react";
import { View, StyleSheet, Text, TouchableHighlight, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import ViewReceta from "../screen/ViewReceta";

const Item = ({ item }) => {
  const { id, name, image, ingredients } = item;
  console.log(image);

  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />   
        <Text style={styles.texto}>{name} </Text>
         
    </View>
  );
};

export default Item;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    justifyContent: "center",
    width: 100,
    height: 100,
    alignItems:"center",

  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  texto: {
    color: "red",
    maxWidth:100,
    textAlign: "center"
    
  },
});