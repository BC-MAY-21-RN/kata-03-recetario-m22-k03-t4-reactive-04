import react from "react";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";
import { useNavigation ,useRoute} from '@react-navigation/native';
import Item from "./Item";

const ListItem = ({ item }) => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableHighlight onPress={() => navigation.navigate("Prueba",{item})}>
        <Item item={item}/>
      </TouchableHighlight>
    </View>
  );
};

export default ListItem;

