import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import Header from '../components/Header';
import Featurebox from '../components/Featurebox';
export default function Dualsense() {
  return (
    <View>
      <View>
        <View>
          <Text>
            <Header />
          </Text>
        </View>

        <ScrollView style={styles.dualsense}>
          <View style={styles.control}>
            <Image
              style={styles.logo}
              source={require('../assets/images/Controller.png')}
              resizeMode="contain"
            />
            <Text style={styles.text}>DUAL SENSE</Text>
          </View>
          <View>
            <FlatList
              data={[
                {
                  img: require('../assets/images/Microphone.png'),
                  text: 'Built-In Microphone',
                },
                {
                  img: require('../assets/images/Headset.png'),
                  text: 'Headset Jack',
                },
                {
                  img: require('../assets/images/Vector.png'),
                  text: 'Motion Sensor',
                },
              ]}
              renderItem={({item}) => (
                <View style={{paddingHorizontal: 14}}>
                  <Featurebox img={item.img} text={item.text} />
                </View>
              )}
              horizontal={true}
              keyExtractor={item => item.img}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dualsense: {
    backgroundColor: '#EEF2FA',
    height: Dimensions.get('window').height + 50,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    paddingHorizontal: 24,
    //  marginTop:50
    //paddingBottom: Dimensions.get('window').height - 30
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
    top: 17,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 80,
    zIndex: -1,
    color: 'white',
    fontWeight: '500',
    fontFamily: 'Tourney-Bold',
    letterSpacing: 10,
    color: 'black',
  },
});
