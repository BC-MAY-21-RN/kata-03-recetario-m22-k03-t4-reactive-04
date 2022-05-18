import React from 'react';
import {Text,View,Image} from 'react-native';
import { useNavigation ,useRoute} from '@react-navigation/native';

export default function ViewReceta() {
    const route = useRoute()
    return (
        <View>
           <Text>{route.params.item.name} </Text>
           <Image
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
        </View>
    );
}