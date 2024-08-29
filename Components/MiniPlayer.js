import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, PanResponder, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MiniPlayer = ({ songName, artistName }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const pan = useRef(new Animated.ValueXY()).current;
  const offset = useRef({ x: 0, y: 0 }).current;

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      pan.setOffset({
        x: offset.x,
        y: offset.y,
      });
      pan.setValue({ x: 0, y: 0 });
    },
    onPanResponderMove: Animated.event(
      [
        null,
        { dx: pan.x, dy: pan.y },
      ],
      { useNativeDriver: false }
    ),
    onPanResponderRelease: (e, gestureState) => {
      offset.x += gestureState.dx;
      offset.y += gestureState.dy;
    },
  });

  return (
    <Animated.View
      style={[styles.container, { transform: [{ translateX: pan.x }, { translateY: pan.y }] }]}
      {...panResponder.panHandlers}
    >
      <TouchableOpacity
        style={styles.playPauseButton}
        onPress={handlePlayPause}
      >
        <Icon name={isPlaying ? 'pause' : 'play'} size={24} color="#fff" />
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <Text style={styles.songName}>{songName}</Text>
        <Text style={styles.artistName}>{artistName}</Text>
      </View>
      <TouchableOpacity style={styles.shareButton}>
        <Icon name="share" size={24} color="#fff" />
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    left: 10,
    right: 10,
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  playPauseButton: {
    backgroundColor: '#555',
    borderRadius: 50,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  songName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  artistName: {
    color: '#aaa',
    fontSize: 14,
  },
  shareButton: {
    backgroundColor: '#555',
    borderRadius: 50,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MiniPlayer;
