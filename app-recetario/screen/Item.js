import React from 'react';
import {Text,View} from 'react-native';

export default function item() {
    const { userId, id, title } = item;
    return (
        <View>
           <Text>{title} </Text>
           <Text>{userId} </Text>
        </View>
    );
}