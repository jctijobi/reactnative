import React from 'react';
import { View, Text, StyleSheet, TextInput, ImageBackground, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const data = [
  {
    id: '1',
    title: 'Tiny house in Rælingen',
    rating: 4.96,
    reviews: 217,
    price: 91,
    oldPrice: 117,
    totalPrice: 273,
    image: 'https://a0.muscache.com/im/pictures/7683325f-1e1d-4aed-b708-63a7a6d348bc.jpg?im_w=720&im_format=avif', // Replace with actual image URL
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
    image: 'https://a0.muscache.com/im/pictures/90de5b70-278e-44b8-9452-3871be0555a9.jpg?im_w=720&im_format=avif', // Replace with actual image URL
    guests: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
  },{
    id: '3',
    title: 'City home in citycenter',
    rating: 4.96,
    reviews: 217,
    price: 91,
    oldPrice: 117,
    totalPrice: 273,
    image: 'https://a0.muscache.com/im/pictures/6f055711-15f4-48f5-82f1-de8b4e65ab76.jpg?im_w=720&im_format=avif', // Replace with actual image URL
    guests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 1,
  },
  {
    id: '4',
    title: 'Cozy home in the woods',
    rating: 4.8,
    reviews: 120,
    price: 85,
    oldPrice: 100,
    totalPrice: 255,
    image: 'https://a0.muscache.com/im/pictures/miso/Hosting-50716448/original/fb972331-68d9-4349-9c17-7689a8314eda.jpeg?im_w=720&im_format=avif', // Replace with actual image URL
    guests: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
  },
  // Add more data here as needed
];

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header Background */}
      <ImageBackground
        source={{ uri: 'https://via.placeholder.com/400x200' }} // Replace with actual header background image
        style={styles.headerBackground}
      >
        <View style={styles.headerContent}>
          <Text style={styles.greeting}>Hey, Martin! Tell us where you want to go</Text>
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
        {/* Add more content or another FlatList for "Discover new places" */}
      </View>

      {/* Bottom Navigation */}
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
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingVertical: 10,
  },
  navItem: {
    alignItems: 'center',
  },
});
