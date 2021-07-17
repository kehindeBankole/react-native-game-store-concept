import React from 'react';
import {StyleSheet, Text, View, Dimensions, Image , ScrollView,} from 'react-native';
import Header from '../components/Header';
export default function Dualsense() {
  return (
    <View>
      <Text>
        <Header />
      </Text>

<View style={styles.dualsense}>
<ScrollView showsVerticalScrollIndicator={false} style={{marginTop:20}}>
        <View style={styles.control}>
          <Image
            style={styles.logo}
            source={require('../assets/images/Controller.png')}
            resizeMode="contain"
          />
          <Text style={styles.text}>DUAL SENSE</Text>
        </View>
        </ScrollView>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  dualsense: {
    backgroundColor: '#6F737B',
    height: Dimensions.get('window').height,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    paddingHorizontal: 24,
  },
  control: {
    position: 'relative',
  },
  logo: {
    width: '100%',
    marginTop: 141,
  },
  text: {
    position: 'absolute',
    top:17,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 80,
    zIndex: -1,
    color: 'white',
  fontWeight: '500',
   fontFamily: "Tourney-Bold",
    letterSpacing: 10,
  },
});
