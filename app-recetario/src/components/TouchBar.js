import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';

const TouchBar = () => {
    return(
       
        <View style={styles.row}>
            <Icon 
            style={styles.iconButton}
            name="close">
            </Icon>
            <View style={styles.rowContainer}>
                <IconEntypo  
                style={styles.iconEnd}
                name="share-alternative">
                </IconEntypo>

                <IconEntypo  
                style={styles.iconEnd}
                name="heart-outlined">
                </IconEntypo>
            </View>
            
        </View>
  
  
    );
}


const styles = StyleSheet.create({
   
      iconButton: {
      fontSize:25,
      color:'white',
   
    },

    iconEnd: {
        fontSize:25,
        color:'white',
        paddingLeft: 30,
    },

    rowContainer: {
        flexDirection: 'row',
    },



    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 30,
        backgroundColor: "#000000c0",
        
    }
})

export default TouchBar;
