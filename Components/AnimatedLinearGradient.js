import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Animated, StyleSheet, View } from 'react-native';

const AnimatedLinearGradient = ({ gradientAnim, style, children }) => {
  // Criação de interpoladores para animar as cores do gradiente
  const interpolatedColors = gradientAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [
      'rgba(106, 13, 173, 1)', // roxo escuro
      'rgba(255, 95, 109, 1)', // rosa claro
    ],
  });

  return (
    <Animated.View style={[style, StyleSheet.absoluteFillObject, { backgroundColor: interpolatedColors }]}>
      <LinearGradient
        colors={['rgba(106, 13, 173, 0.5)', 'rgba(255, 95, 109, 0.5)']}
        style={StyleSheet.absoluteFillObject}
        start={[0, 0]}
        end={[1, 1]}
      >
        {children}
      </LinearGradient>
    </Animated.View>
  );
};

export default AnimatedLinearGradient;
