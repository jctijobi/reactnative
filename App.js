import React from 'react';
import { View, Text, StyleSheet, TextInput, ImageBackground, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const data = [
  {
    id: '1',
    title: 'Tiny home near City',
    rating: 4.96,
    reviews: 217,
    price: 91,
    oldPrice: 117,
    totalPrice: 273,
    image: 'https://a0.muscache.com/im/pictures/miso/Hosting-577370196926237554/original/aedd9a4e-548f-4a0d-99cc-05a489ad7fb8.jpeg?im_w=720&im_format=avif', // Replace with actual image URL
    guests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 1,
  },
  {
    id: '2',
    title: 'Cozy cabin in the woods',
    rating: 4.8,
    reviews: 120,
    price: 85,
    oldPrice: 100,
    totalPrice: 255,
    image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA4ODc4NjAzMDc2MDgyMDQ2OQ%3D%3D/original/f76b566e-c985-4f2a-86a1-d9984947e078.jpeg?im_w=720&im_format=avif', // Replace with actual image URL
    guests: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
  },
  {
    id: '3',
    title: 'Smart home in City',
    rating: 4.96,
    reviews: 217,
    price: 91,
    oldPrice: 117,
    totalPrice: 273,
    image: 'https://a0.muscache.com/im/pictures/miso/Hosting-29247057/original/9cb6a566-9fa4-4c92-a31a-258d663bb8b5.jpeg?im_w=720&im_format=avif', // Replace with actual image URL
    guests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 1,
  },
  {
    id: '4',
    title: 'Beautify home in the City',
    rating: 4.8,
    reviews: 120,
    price: 85,
    oldPrice: 100,
    totalPrice: 255,
    image: 'https://a0.muscache.com/im/pictures/4e588f60-3eff-441e-b928-40bc6a9d1549.jpg?im_w=720&im_format=avif', // Replace with actual image URL
    guests: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
  },
  // Add more data here as needed
];

const countries = [
  {
    id: '1',
    name: 'Norway',
    image: 'https://lh5.googleusercontent.com/p/AF1QipMR_Sivj6zUHBhjA2pSKuw64mtW8_yihiMR1Hay=w540-h312-n-k-no', // Replace with actual image URL
  },
  {
    id: '2',
    name: 'France',
    image: 'data:image/jpeg;base64,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', // Replace with actual image URL
  },
  {
    id: '3',
    name: 'Japan',
    image: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcS0X1TM7O_hNJ-Z5EaeREvbdrgB5sqnm1lPYZPPv6p4J4jIHmV7fnn3DqSZrmZ8UxBo5ILJftShMhvghhL_wmJa6YjXZPGewb121zCXdg', // Replace with actual image URL
  },
  // Add more countries here as needed
];

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header Background */}
      <ImageBackground
        source={{ uri: 'https://a0.muscache.com/im/pictures/8fd2c278-c14d-4aa1-be81-03e5a9664de4.jpg?im_w=720&im_format=avif' }} // Replace with actual header background image
        style={styles.headerBackground}
      >
        <View style={styles.headerContent}>
          <Text style={styles.greeting}>Hey, Soniya! Tell us where you want to go</Text>
          <View style={styles.searchBar}>
            <Ionicons name="search" size={20} color="gray" />
            <TextInput
              placeholder="Search places"
              style={styles.searchInput}
            />
          </View>
        </View>
      </ImageBackground>

      {/* The most relevant section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>The most relevant</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
        {data.map((item) => (
          <TouchableOpacity key={item.id} style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDetails}>
                {item.guests} guests · {item.bedrooms} bedrooms · {item.beds} beds · {item.bathrooms} bathroom
              </Text>
              <View style={styles.cardFooter}>
                <Text style={styles.cardPrice}>€{item.price} <Text style={styles.oldPrice}>€{item.oldPrice}</Text> / night</Text>
                <Text style={styles.totalPrice}>€{item.totalPrice} total</Text>
              </View>
              <Text style={styles.cardRating}>⭐ {item.rating} ({item.reviews})</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Discover new places section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Discover new places</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
        {countries.map((country) => (
          <TouchableOpacity key={country.id} style={styles.card}>
            <Image source={{ uri: country.image }} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{country.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavContainer}>
        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navItem}>
            <Ionicons name="home" size={24} color="black" />
            <Text>Discover</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Ionicons name="heart" size={24} color="gray" />
            <Text>Favorites</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Ionicons name="calendar" size={24} color="gray" />
            <Text>Bookings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Ionicons name="chatbubble" size={24} color="gray" />
            <Text>Messages</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerBackground: {
    width: '100%',
    height: 200,
  },
  headerContent: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  greeting: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 10,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
  },
  sectionHeader: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  carousel: {
    paddingLeft: 15,
  },
  card: {
    width: 250,
    marginRight: 15,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,
  },
  cardImage: {
    width: '100%',
    height: 150,
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardDetails: {
    color: 'gray',
    fontSize: 12,
    marginVertical: 5,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardPrice: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  totalPrice: {
    color: 'gray',
    fontSize: 12,
  },
  cardRating: {
    color: 'gold',
    fontSize: 12,
    marginTop: 5,
  },
  bottomNavContainer: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  navItem: {
    alignItems: 'center',
  },
});
