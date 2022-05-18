import react from "react";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";
import { useNavigation ,useRoute} from '@react-navigation/native';
import Item from "../components/Item";

const ListItem = ({ item }) => {
  const navigation = useNavigation();

  return (
 
      <TouchableHighlight onPress={() => navigation.navigate("ViewReceta",{item})} style={styles.container}>
        <Item item={item}/>
      </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    justifyContent: "center",
    width:120,
    height:120,
    alignItems:"center",
    backgroundColor:"white",
  }
 
});



export default ListItem;

