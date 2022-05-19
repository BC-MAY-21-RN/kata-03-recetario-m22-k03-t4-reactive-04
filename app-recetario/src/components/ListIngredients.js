import react from "react";
import { View, Text} from "react-native";

const ListIngredients = ({item}) => {

    const {  name, quantity } = item;
    return (
      
        <View >
        <Text>{name}</Text>
        <Text>{quantity}</Text>
      </View>
      
    );
  };

  export default ListIngredients;