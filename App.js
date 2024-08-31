import React, { useState, useRef, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Animated } from 'react-native';
import AnimatedLinearGradient from './Components/AnimatedLinearGradient';
import MenuBar from './Components/MenuBar';
import BottomMenuBar from './Components/BottomMenuBar';
import Content from './Components/Content'; 
import MiniPlayer from './Components/MiniPlayer'; 

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const gradientAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const startGradientAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(gradientAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: false,
        }),
        Animated.timing(gradientAnim, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: false,
        }),
      ])
    ).start();
  };

  const animateTabChange = () => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

  useEffect(() => {
    startGradientAnimation();
    animateTabChange();
  }, [activeTab]);

  const shouldShowMiniPlayer = !['settings', 'profile'].includes(activeTab);

  return (
    <View style={styles.container}>
      <AnimatedLinearGradient
        gradientAnim={gradientAnim}
        style={styles.gradient}
      >
        <MenuBar setActiveTab={setActiveTab} />
        <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
          <Content activeTab={activeTab} />
        </Animated.View>
        <BottomMenuBar setActiveTab={setActiveTab} />
      </AnimatedLinearGradient>
      {shouldShowMiniPlayer && (
        <MiniPlayer
          songName="Song Title"
          artistName="Artist Name"
        />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingTop: 90,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});
