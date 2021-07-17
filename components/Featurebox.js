import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Featurebox() {
    return (
        <View style={styles.container}>
            <Text>dd</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 150,
        width:160,
        backgroundColor:'#EEF2FA',
        borderRadius:40
    }
})
