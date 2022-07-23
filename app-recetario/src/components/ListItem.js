import React from "react";
import { StyleSheet, TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Item from "../components/Item";

const ListItem = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableHighlight
      onPress={() => navigation.navigate("ViewReceta", { item })}
      style={styles.container}
    >
      <Item item={item} />
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: 160,
    height: 170,
    alignItems: "center",
    backgroundColor: "transparent",
  },
});

export default ListItem;
