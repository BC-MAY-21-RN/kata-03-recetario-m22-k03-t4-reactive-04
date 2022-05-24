import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screen/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ViewReceta from './src/screen/ViewReceta';

const Stack = createNativeStackNavigator();

export default function App() {

///screenOptions={{headerShown: false}}
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen  name="Home" component={HomeScreen} />
        <Stack.Screen name="ViewReceta"  component={ViewReceta} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

