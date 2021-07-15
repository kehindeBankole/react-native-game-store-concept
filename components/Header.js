import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <View>
        <Pressable
          onPress={() => {}}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
            },
            styles.settingsbutton,
          ]}>
          <Image
            style={styles.tinyLogo}
            source={require('../assets/images/Menu.png')}
          />
        </Pressable>
      </View>
      <View style={styles.logo}>
        <Image
          style={styles.tinyLogo}
          source={require('../assets/images/PS5logo.png')}
        />
      </View>
      <View>
      <Pressable
          onPress={() => {}}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
            },
            styles.settingsbutton,
          ]}>
          <Image
            style={styles.tinyLogo}
            source={require('../assets/images/Settings.png')}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingVertical: 48,
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  settingsbutton: {
    width: 56,
    height: 56,
    //backgroundColor:"#21262E",
    borderRadius: 16,
    backgroundColor: '#21262E',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    
    elevation: 11,
  },
});
