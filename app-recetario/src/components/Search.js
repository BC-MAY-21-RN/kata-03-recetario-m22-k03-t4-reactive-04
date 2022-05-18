import react from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Icon } from 'react-native-elements'


const Search = () => {
    return (
      
        <View style={styles.searchSection}>
        <Icon
          name='search'  style={styles.searchIcon}/>
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
    searchSection: {
     
    flexDirection: 'row',
  },
  searchIcon: {
    padding: 20,
},
    input: {
    
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:50,
    placeholderTextColor: 'black',
    color: 'white',
    backgroundColor:'white'
  },

});

  export default Search;