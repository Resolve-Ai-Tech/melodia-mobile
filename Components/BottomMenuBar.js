import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const BottomMenuBar = ({ setActiveTab }) => {
  return (
    <View style={styles.bottomMenuBar}>
      <TouchableOpacity
        style={styles.bottomIconContainer}
        onPress={() => setActiveTab('settings')}
      >
        <Icon name="cogs" size={24} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.bottomIconContainer}
        onPress={() => setActiveTab('music')}
      >
        <Icon name="music" size={24} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.bottomIconContainer}
        onPress={() => setActiveTab('home')}
      >
        <Image
          source={require('../MELODIA/LOGO-MELODIA-17.png')}
          style={styles.bottomLogo}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.bottomIconContainer}
        onPress={() => setActiveTab('favorites')}
      >
        <Icon name="star" size={24} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.bottomIconContainer}
        onPress={() => {}}
      >
        <Icon name="microphone" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomMenuBar: {
    position: 'absolute',
    bottom: 0,
    height: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    elevation: 10, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 8,
  },
  bottomIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60, 
    width: 79,  
  },
  bottomLogo: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
  },
});

export default BottomMenuBar;
