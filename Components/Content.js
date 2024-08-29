import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, Image } from 'react-native';

const DATA = [
  { id: '1', title: 'Most Listened 1', image: 'https://via.placeholder.com/150' },
  { id: '2', title: 'Most Listened 2', image: 'https://via.placeholder.com/150' },
  { id: '3', title: 'Most Listened 3', image: 'https://via.placeholder.com/150' },
  { id: '4', title: 'Most Listened 4', image: 'https://via.placeholder.com/150' },
  { id: '5', title: 'Most Listened 5', image: 'https://via.placeholder.com/150' },
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

const SliderRectangular = () => (
  <FlatList
    data={DATA}
    renderItem={({ item }) => <ItemRectangular image={item.image} />}
    keyExtractor={item => item.id}
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.slider}
  />
);

const SliderCircular = () => (
  <FlatList
    data={DATA}
    renderItem={({ item }) => <ItemCircular image={item.image} />}
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
        <View style={styles.container}>
          <Text style={styles.header}>Top Tracks</Text>
          <SliderRectangular />
          <SliderCircular />
          <SliderRectangular />
        </View>
      );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  slider: {
    paddingVertical: 10,
  },
  itemRectangular: {
    backgroundColor: '#f9c2ff',
    borderRadius: 10,
    height: 140, // Tamanho maior para o retangular
    width: width * 0.7,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  itemCircular: {
    backgroundColor: '#f9c2ff',
    borderRadius: 75, // Tamanho do borderRadius para tornar circular
    height: 120, // Tamanho menor para o circular
    width: 120,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  imageRectangular: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  imageCircular: {
    width: '100%',
    height: '100%',
    borderRadius: 75, // Tamanho do borderRadius para tornar circular
    resizeMode: 'cover',
  },
  text: {
    fontSize: 18,
    color: '#555',
  },
});

export default Content;
