import react from "react";
import { View, StyleSheet, Text, TouchableHighlight, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import ViewReceta from "../screen/ViewReceta";

const Item = ({ item }) => {
  const { id, name, image, ingredients } = item;
  console.log(image);

  return (
    <View style={styles.container}>
        <Text style={styles.texto}>{name} </Text>
        <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />    
    </View>
  );
};

export default Item;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: "aliceblue",
    justifyContent: "space-between"
  },
  tinyLogo: {
    width: 50,
    height: 50,
    paddingLeft: 20,
    
  },
  logo: {
    width: 66,
    height: 58,
  },
  texto: {
    color: "red",
    margin:40,
    
  },
});