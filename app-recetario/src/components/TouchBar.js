import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const TouchBar = () => {
    return(
       
        <View >
           <Icon 
           style={styles.iconButton}
           name="facebook">
        </Icon>
        
        <Icon  style={styles.iconButton}
        name="facebook">
        </Icon>
        </View>
  
  
    );
}


const styles = StyleSheet.create({
   
      iconButton: {
      fontSize:30,
      color:'red',
    },
})

export default TouchBar;
