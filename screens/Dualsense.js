import React from 'react'
import { StyleSheet, Text, View ,Dimensions} from 'react-native'
import  Header from '../components/Header'
export default function Dualsense() {
    return (
        <View>
            <Text>
                <Header/>
            </Text>
            <View style={styles.dualsense}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    dualsense:{
        backgroundColor:'#6F737B',
        height: Dimensions.get('window').height,
        borderTopLeftRadius:60,
        borderTopRightRadius:60
    }
})
