import React from 'react'
import { StyleSheet, Text, View ,StatusBar , Dimensions } from 'react-native'
import  Dualsense from './screens/Dualsense'
export default function App() {
  return (
    <View style={styles.container}>
         <StatusBar
        animated={true}
        backgroundColor="black" />
  <View>
  <Dualsense/>
  </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    height:Dimensions.get('window').height,
    width:Dimensions.get('window').width,
    backgroundColor:'#21262E'
  }
})
