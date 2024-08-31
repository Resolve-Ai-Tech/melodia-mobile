import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MiniPlayer = ({ songName, artistName }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <View style={styles.miniPlayer}>
      <TouchableOpacity style={styles.playPauseButton} onPress={handlePlayPause}>
        <Icon name={isPlaying ? 'pause' : 'play'} size={24} color="#fff" />
      </TouchableOpacity>
      <View style={styles.songInfo}>
        <Text style={styles.songName}>{songName}</Text>
        <Text style={styles.artistName}>{artistName}</Text>
      </View>
      <TouchableOpacity style={styles.shareButton}>
        <Icon name="share" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  miniPlayer: {
    position: 'absolute',
    bottom: 55, 
    left: '45%',
    transform: [{ translateX: -150 }],
    width: '85%',
    backgroundColor: '#6a1b9a', 
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    zIndex: 1000, 
  },
  playPauseButton: {
    backgroundColor: '#4a0072', 
    borderRadius: 50,
    padding: 10,
    marginRight: 10,
  },
  songInfo: {
    flex: 1,
  },
  songName: {
    color: '#fff',
    fontWeight: 'bold',
  },
  artistName: {
    color: '#ccc',
  },
  shareButton: {
    marginLeft: 10,
  },
});

export default MiniPlayer;
