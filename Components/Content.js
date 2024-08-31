// Content.js
import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';
import MiniPlayer from './MiniPlayer'; // Importa o MiniPlayer

const RECTANGULAR_DATA_1 = [
  { id: '1', image: 'https://via.placeholder.com/150x140' },
  { id: '2', image: 'https://via.placeholder.com/150x140' },
  { id: '3', image: 'https://via.placeholder.com/150x140' },
  { id: '4', image: 'https://via.placeholder.com/150x140' },
  { id: '5', image: 'https://via.placeholder.com/150x140' },
  // Adicione mais dados conforme necessário
];

const RECTANGULAR_DATA_2 = [
  { id: '1', image: 'https://via.placeholder.com/150x140?text=1' },
  { id: '2', image: 'https://via.placeholder.com/150x140?text=2' },
  { id: '3', image: 'https://via.placeholder.com/150x140?text=3' },
  { id: '4', image: 'https://via.placeholder.com/150x140?text=4' },
  { id: '5', image: 'https://via.placeholder.com/150x140?text=5' },
  // Adicione mais dados conforme necessário
];

const CIRCULAR_DATA = [
  { id: '1', image: 'https://via.placeholder.com/120' },
  { id: '2', image: 'https://via.placeholder.com/120' },
  { id: '3', image: 'https://via.placeholder.com/120' },
  { id: '4', image: 'https://via.placeholder.com/120' },
  { id: '5', image: 'https://via.placeholder.com/120' },
  { id: '6', image: 'https://via.placeholder.com/120' },
  { id: '7', image: 'https://via.placeholder.com/120' },
  { id: '8', image: 'https://via.placeholder.com/120' },
  // Adicione mais dados conforme necessário
];

const SQUARE_DATA = [
  { id: '1', image: 'https://via.placeholder.com/100x100' },
  { id: '2', image: 'https://via.placeholder.com/100x100' },
  { id: '3', image: 'https://via.placeholder.com/100x100' },
  { id: '4', image: 'https://via.placeholder.com/100x100' },
  { id: '5', image: 'https://via.placeholder.com/100x100' },
  { id: '6', image: 'https://via.placeholder.com/100x100' },
  { id: '7', image: 'https://via.placeholder.com/100x100' },
  { id: '8', image: 'https://via.placeholder.com/100x100' },
  // Adicione mais dados conforme necessário
];

const { width } = Dimensions.get('window');

const ItemRectangular = ({ image }) => (
  <View style={styles.itemRectangular}>
    <Image source={{ uri: image }} style={styles.imageRectangular} />
  </View>
);

const ItemCircular = ({ image }) => (
  <View style={styles.itemCircular}>
    <Image source={{ uri: image }} style={styles.imageCircular} />
  </View>
);

const ItemSquare = ({ image }) => (
  <View style={styles.itemSquare}>
    <Image source={{ uri: image }} style={styles.imageSquare} />
  </View>
);

const SliderRectangular = ({ data }) => (
  <FlatList
    data={data}
    renderItem={({ item }) => <ItemRectangular image={item.image} />}
    keyExtractor={item => item.id}
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.slider}
  />
);

const SliderCircular = ({ data }) => (
  <FlatList
    data={data}
    renderItem={({ item }) => <ItemCircular image={item.image} />}
    keyExtractor={item => item.id}
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.slider}
  />
);

const SliderSquare = ({ data }) => (
  <FlatList
    data={data}
    renderItem={({ item }) => <ItemSquare image={item.image} />}
    keyExtractor={item => item.id}
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.slider}
  />
);

const Content = ({ activeTab }) => {
  switch (activeTab) {
    case 'favorites':
      return <Text style={styles.text}>Favorites Screen</Text>;
    case 'music':
      return <Text style={styles.text}>Music Screen</Text>;
    case 'settings':
      return <Text style={styles.text}>Settings Screen</Text>;
    case 'home':
    default:
      return (
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          style={styles.scrollView}
        >
          <View style={styles.container}>
            <Text style={styles.header}>Musicas do Balacobaco:</Text>
            <SliderRectangular data={RECTANGULAR_DATA_1} />
            <Text style={styles.subHeader}>Artistas mais ouvidos:</Text>
            <SliderCircular data={CIRCULAR_DATA} />
            <Text style={styles.subHeader}>Últimas músicas ouvidas:</Text>
            <SliderRectangular data={RECTANGULAR_DATA_2} />
            <Text style={styles.subHeader}>Sugestões da IA:</Text>
            <SliderSquare data={SQUARE_DATA} />
          </View>
        </ScrollView>
      );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 140, 
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  scrollView: {
    flex: 1,
    paddingBottom: 80, 
  },
  slider: {
    paddingVertical: 10,
  },
  itemRectangular: {
    backgroundColor: '#f9c2ff',
    borderRadius: 10,
    height: 140,
    width: width * 0.7,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.1, 
    shadowRadius: 4, 
  },
  itemCircular: {
    backgroundColor: '#f9c2ff',
    borderRadius: 75,
    height: 120,
    width: 120,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    elevation: 5, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.1,
    shadowRadius: 4, 
  },
  itemSquare: {
    backgroundColor: '#f9c2ff',
    borderRadius: 10,
    height: 100,
    width: 100,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.1, 
    shadowRadius: 4, 
  },
  imageRectangular: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  imageCircular: {
    width: '100%',
    height: '100%',
    borderRadius: 75,
    resizeMode: 'cover',
  },
  imageSquare: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  text: {
    fontSize: 18,
    color: '#555',
  },
});

export default Content;
