import react from "react";
import { View, Text, StyleSheet} from "react-native";


const ListIngredients = ({item}) => {

    const {  name, quantity } = item;
    return (
      
        <View style={styles.setRow}>
          <Text style={styles.font}>{name}</Text>
          <Text style={styles.font2}>{quantity}</Text>
        </View>

    );
  };

  const styles = StyleSheet.create({
    setRow: {
      flex:1,
      flexDirection: 'row',
      borderBottomWidth:1,
      borderBottomColor:"white",
      paddingBottom:10,
      margin:20
    },
    font: {
      fontSize: 18,
      flex: 4,
      color: 'white',
      paddingLeft:20
    },
    font2: {
      fontSize: 18,
      flex: 1,
      color: 'white',
    }
    
  })

  export default ListIngredients;