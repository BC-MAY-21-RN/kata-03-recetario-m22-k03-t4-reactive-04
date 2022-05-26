import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  FlatList,
  Image,
} from "react-native";
import Search from "../components/Search";
import Carousel from "../components/Carousel";
import Recetario from "../data/recetario.json";
import ViewReceta from "./ViewReceta"
import { useNavigation, useRoute } from "@react-navigation/native";

const arreglo = [];


function isRecent(num) {
  
  let array = [];
    if(num == null)
    {
      console.log(arreglo);
    }
    else{
      arreglo.push(num);
      console.log(arreglo);
      


    }
    
    Recetario.map(function (index, id) {
      for (let i = 0; i < arreglo.length; i++) {
        if (id === arreglo[i]) {
          console.log(arreglo[i]);
          array.unshift(index);
        }
      }
    });
  //console.log(array);
  
  //array.unshift(1)
  //console.log(arreglo);

  return array;
}

export default function HomeScreen({ navigation }) {
  const route = useRoute();

  //console.log(route.params);

  if(route.params==null)
  {
    console.log("esta vacio");
  }
  else{
    //console.log(route.params);
    let id = route.params.id;
    //console.log(id);
    isRecent(id);
  }



  let arrayRecent = isRecent();

  return (
    <View style={styles.container}>
      <Search />
      <Carousel title="Trending" data={Recetario} />
      <Carousel title="Recent" data={arrayRecent} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#343435",
    width: "100%",
    height: "100%",
  },
});

