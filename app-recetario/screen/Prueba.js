import React from 'react';
import {Text,View,Image} from 'react-native';
import { useNavigation ,useRoute} from '@react-navigation/native';

export default function Prueba() {
   // const { otherParam} = route;
   const route = useRoute()

  

    return (
        <View>
            <Text>titulo 1</Text>
            <Text>{route.params.item.userId} </Text>
           <Text>{route.params.item.id} </Text>
           <Text>{route.params.item.title} </Text>
           <Text>ASDASDASD </Text> 
           <Image
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />

        </View>
    );
}