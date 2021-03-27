import React, { useState } from 'react';
import { StyleSheet, View} from 'react-native';

// const rows = 3;
// const cols = 2;

export default function Card(props){
    return(
        <View style={styles.sectionContainer}>
            <View style={styles.boxContainer}>
            {props.children}
            </View>
        </View>
    )
} 

const styles=StyleSheet.create({
    boxContainer: {
      marginTop:20,
      marginBottom: 4,
      marginLeft:30,
      marginRight: 4,
      width: 150,
      height: 200,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: 10,
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      shadowColor: "#000",
      elevation: 3,
    },
    sectionContainer: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      margin:2,
      padding:2,
      backgroundColor: '#FBF5F2'
    },
})