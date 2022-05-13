import react from "react";
import { View, StyleSheet, Text } from "react-native";



const  Item =  (props) =>{
    return (
        <View>
        <Text>{props.title}</Text>
        </View> 
    );
  };

  export default Item();