import React from 'react';
import {Text,View,Image} from 'react-native';

export default function ViewReceta() {
    const { image, id, name } = item;
    console.log(name);
    return (
        <View>
           <Text>{id} </Text>
           <Text>{name} </Text>
        </View>
        
    );
}