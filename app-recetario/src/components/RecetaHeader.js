import React from "react";
import { View, Text, StyleSheet, ImageBackground,TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import { useNavigation } from '@react-navigation/native';

const HeaderReceta = (props) => {
  const { title, imagen } = props;
  const navigation = useNavigation();
  console.log(imagen);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require(`../image/${imagen}`)}
        style={styles.image}
      >
        <View style={styles.iconBar}>    
         <TouchableOpacity style={{flex:4}} onPress={() => navigation.navigate("Home")}><Text><Icon style={[styles.icon]} name="close"></Icon></Text></TouchableOpacity>
         <TouchableOpacity style={{flex:1}} ><Text><Icon style={[styles.icon]} name="share-apple"></Icon></Text></TouchableOpacity>
         <TouchableOpacity style={{flex:1}} ><Text><Icon style={[styles.icon]} name="heart"></Icon></Text></TouchableOpacity>
        </View>
        <Text style={styles.texto}>TRENDING</Text>
        <Text style={styles.texto}>{title}</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  image: {
    width: "auto",
    flex: 1,
    opacity: 0.8,
  },
  button: {
    fontSize: 30,
    color: "red",
  },
  iconBar: {
    flex: 1,
    flexDirection: "row",
    alignItems:"flex-start",
    marginTop:10,
  },
  icon: {
    fontSize: 40,
    color: "white",
    marginLeft:15,
  },
  texto: {
    fontSize: 35,
    color: "white",
    alignItems:"flex-end"
  },
});

export default HeaderReceta;
///<Image style={styles.image} source={require(`../image/${imagen}`)} />
