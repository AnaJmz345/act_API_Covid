
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';

export default function CountryCard({ country, navigation }) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('CountryStats', { country })} 
    >
        <Image source={{ uri: country.flag }} style={styles.flag} />
        <Text style={styles.name}>{country.country}</Text>
        <Text style={styles.cases}>Cases: {country.cases}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 15,
    borderRadius: 8,
    elevation: 3,
    alignItems: 'center',  
  },
  flag: {
    width: 80,
    height: 50,
    borderRadius: 5,
    marginBottom: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  cases: {
    color: '#005ED1',
  },
});

