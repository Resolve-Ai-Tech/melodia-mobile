import React, { useState, useRef, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, TouchableOpacity, Animated, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';

// Importe os componentes de tela
import SettingsScreen from './SettingsScreen';
import FavoritesScreen from './FavoritesScreen';
import MusicScreen from './MusicScreen';

// Crie um componente animado para o LinearGradient
const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

export default function App() {
  // Estado para controlar a aba ativa
  const [activeTab, setActiveTab] = useState('home');

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

  // Interpolação das cores do gradiente com base na animação
  const interpolateColor1 = gradientAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['#E6E6FA', '#8e44ad'], // Cores do gradiente
  });

  const interpolateColor2 = gradientAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['#8e44ad', '#6a0dad'], // Cores do gradiente
  });

  // Função para renderizar o conteúdo com base na aba ativa
  const renderContent = () => {
    switch (activeTab) {
      case 'favorites':
        return <FavoritesScreen />;
      case 'music':
        return <MusicScreen />;
      case 'settings':
        return <SettingsScreen />;
      case 'home':
      default:
        return <View style={styles.content}><Text>Home Content</Text></View>;
    }
  };

  return (
    <View style={styles.container}>
      <AnimatedLinearGradient
        colors={[interpolateColor1, interpolateColor2]} // Cores do gradiente animado
        style={styles.gradient}
      >
        {/* Barra do Menu Superior */}
        <View style={styles.menuBar}>
          <View style={styles.leftContainer}>
            {/* Botão para a aba inicial (home) */}
            <TouchableOpacity onPress={() => setActiveTab('home')}>
              <Image source={require('./MELODIA/LOGO-MELODIA-14.png')} style={styles.logo} />
            </TouchableOpacity>
          </View>
          <View style={styles.rightContainer}>
            {/* Ícone de Notificação */}
            <TouchableOpacity style={styles.iconContainer}>
              <Icon name="bell" size={24} color="#000" />
            </TouchableOpacity>

            {/* Ícone de Perfil */}
            <TouchableOpacity style={styles.iconContainer}>
              <Image
                source={require('./MELODIA/AvatarImg.jpg')}
                style={styles.profilePic}
              />
            </TouchableOpacity>

            {/* Menu Hambúrguer */}
            <TouchableOpacity style={styles.iconContainer}>
              <Icon name="bars" size={24} color="#000" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Conteúdo da Tela com animação de desvanecimento */}
        <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
          {renderContent()}
        </Animated.View>

        {/* Barra do Menu Inferior */}
        <View style={styles.bottomMenuBar}>
          {/* Botão para a aba de Configurações */}
          <TouchableOpacity
            style={styles.bottomIconContainer}
            onPress={() => setActiveTab('settings')}
          >
            <Icon name="cogs" size={24} color="#000" />
          </TouchableOpacity>

          {/* Botão para a aba de Música */}
          <TouchableOpacity
            style={styles.bottomIconContainer}
            onPress={() => setActiveTab('music')}
          >
            <Icon name="music" size={24} color="#000" />
          </TouchableOpacity>

          {/* Logo no centro da barra inferior */}
          <TouchableOpacity
            style={styles.bottomIconContainer}
            onPress={() => setActiveTab('home')}
          >
            <Image
              source={require('./MELODIA/LOGO-MELODIA-17.png')}
              style={styles.bottomLogo}
            />
          </TouchableOpacity>

          {/* Botão para a aba de Favoritos */}
          <TouchableOpacity
            style={styles.bottomIconContainer}
            onPress={() => setActiveTab('favorites')}
          >
            <Icon name="star" size={24} color="#000" />
          </TouchableOpacity>

          {/* Botão para a aba de Microfone */}
          <TouchableOpacity
            style={styles.bottomIconContainer}
            onPress={() => setActiveTab('home')}
          >
            <Icon name="microphone" size={24} color="#000" />
          </TouchableOpacity>
        </View>
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
  menuBar: {
    position: 'absolute',
    top: 0,
    height: 90,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    elevation: 3,
    zIndex: 1,
    paddingTop: 20,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  profilePic: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#6a0dad',
    overflow: 'hidden',
    marginHorizontal: 10,
    resizeMode: 'cover',
  },
  iconContainer: {
    marginHorizontal: 10,
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    paddingTop: 90,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
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
    elevation: 3,
  },
  bottomIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomLogo: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
  },
});
