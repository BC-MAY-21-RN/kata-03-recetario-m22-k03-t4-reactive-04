import react from "react";
import { View, StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Search = () => {
  return (
    <View style={styles.container}>
      <View style={styles.seachBar}>
        <Icon style={styles.icon} name="search"></Icon>
        <TextInput
          style={styles.search}
          /// onChangeText={onChangeNumber}
          /// value={number}
          placeholder="What do you want to eat?"
        />
        <Icon style={styles.icon} name="microphone"></Icon>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
  },
  seachBar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "baseline",
    backgroundColor: "#282828",
    height: 40,
    borderRadius: 10,
    marginTop:20,
    marginLeft:5,
    marginRight:5,
    
  },
  search: {
    flex:0.95,
    backgroundColor: "#282828",
    height: 40,
    color:"#E1E1E1",
    paddingLeft:10,
  },
  icon: {
    fontSize: 15,
    color:"#E1E1E1"
  }
});

export default Search;
