import react from "react";
import { View, StyleSheet, TextInput } from "react-native";


const Search = () => {
    return (
      
        <View>
        
        <TextInput
          style={styles.input}
         /// onChangeText={onChangeNumber}
         /// value={number}
          placeholder="What do you want to eat?"
          keyboardType="numeric"
        />
      </View>
      
    );
  };

  const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

  export default Search;