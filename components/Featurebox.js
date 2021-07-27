import React from 'react';
import {StyleSheet, Text, View , Image} from 'react-native';

export default function Featurebox(props) {
  return (
    <View style={styles.container}>
       <Image source={props.img} resizeMode="contain"/>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 160,
    width: 150,
    paddingHorizontal:16,
    paddingVertical:32,
    backgroundColor: '#EEF2FA',
    borderRadius: 40,
    shadowColor: '#000',
    flexDirection: 'column',
    justifyContent:'center',
    marginBottom: 300,
    shadowOffset: {
      width: 0,
      height: 52,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 15,
  },
  text:{
      marginTop:33,
      color:'#000000',
     fontFamily:'Montserrat-Bold',
     fontSize:14,
     lineHeight:18

  }
});
