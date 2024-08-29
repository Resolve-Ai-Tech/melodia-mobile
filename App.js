import React, { useState, useRef, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Animated } from 'react-native';
import AnimatedLinearGradient from './Components/AnimatedLinearGradient';
import MenuBar from './Components/MenuBar';
import BottomMenuBar from './Components/BottomMenuBar';
import Content from './Components/Content'; // Importe o componente Content

export default function App() {
  // Estado para controlar a aba ativa
  const [activeTab, setActiveTab] = useState('home'); // Configurado para 'home' por padrão

  // Referências para animações
  const gradientAnim = useRef(new Animated.Value(0)).current; // Animação do gradiente
  const fadeAnim = useRef(new Animated.Value(1)).current; // Animação de desvanecimento

  // Função para iniciar a animação contínua do gradiente
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

  // Função para animar a transição entre telas com efeito de desvanecimento
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

  // Inicia as animações quando a aba ativa muda
  useEffect(() => {
    startGradientAnimation();
    animateTabChange();
  }, [activeTab]);

  return (
    <View style={styles.container}>
      <AnimatedLinearGradient
        gradientAnim={gradientAnim}
        style={styles.gradient}
      >
        {/* Barra do Menu Superior */}
        <MenuBar setActiveTab={setActiveTab} />

        {/* Conteúdo da Tela com animação de desvanecimento */}
        <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
          <Content activeTab={activeTab} />
        </Animated.View>

        {/* Barra do Menu Inferior */}
        <BottomMenuBar setActiveTab={setActiveTab} />
      </AnimatedLinearGradient>
      <StatusBar style="auto" />
    </View>
  );
}

// Estilos para o aplicativo
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda a tela
  },
  gradient: {
    flex: 1, // Ocupa toda a tela
  },
  content: {
    flex: 1,
    paddingTop: 90,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});
