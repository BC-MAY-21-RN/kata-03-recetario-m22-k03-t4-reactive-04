import react from "react";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Item = ({ item }) => {
  const { userId, id, title } = item;
 

  return (
    <View>
        <Text>{id} </Text>
        <Text>{title} </Text>
    </View>
  );
};

export default Item;
