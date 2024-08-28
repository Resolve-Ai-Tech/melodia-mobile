import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';

export default function Melodia() {
  return (
    <View style={styles.container}>
      {/* Degradê de Fundo */}
      <LinearGradient
        colors={['#4b0082', '#9b59b6']} 
        style={styles.gradient}
      >
        {/* Barra do Menu Superior */}
        <View style={styles.menuBar}>
          <View style={styles.leftContainer}>

            {/* Logo */}
            <Image source={require('./MELODIA/LOGO-MELODIA-14.png')} style={styles.logo} />
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
        {/* Fim do Menu Bar Superior */}


        {/* Conteúdo da Tela */}
        <View style={styles.content}>
          <Text>To take my love away
          </Text>
        </View>


        {/* Barra do Menu Inferior */}
        <View style={styles.bottomMenuBar}>
          <TouchableOpacity style={styles.bottomIconContainer}>
            <Icon name="cogs" size={24} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.bottomIconContainer}>
            <Icon name="music" size={24} color="#000" />
          </TouchableOpacity>

          <Image
            source={require('./MELODIA/LOGO-MELODIA-17.png')} // Substitua pela URL da logo ou use o mesmo logo do topo
            style={styles.bottomLogo}
          />

          <TouchableOpacity style={styles.bottomIconContainer}>
            <Icon name="star" size={24} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.bottomIconContainer}>
            <Icon name="microphone" size={24} color="#000" />
          </TouchableOpacity>
        </View>
        {/* Fim do Menu Bar Inferior */}
      </LinearGradient>

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
