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
    font: {
      fontSize: 32,
      flex: 3,
      color: 'white'
    },
    font2: {
      fontSize: 32,
      flex: 3,
      color: 'white'
    },
    setRow: {
      flex: 6,
      flexDirection: 'row',
    }
  })

  export default ListIngredients;