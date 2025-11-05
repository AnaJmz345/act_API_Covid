import { View, Text, Button, StyleSheet,ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { CovidApiService } from '../../controllers/CovidApiService';
import CountryCard from '../Components/CountryCard';

export default function CountriesList({ navigation }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    CovidApiService.getAllCountries().then(setCountries).catch(console.error);
  }, []);

  return (
    <ScrollView>
     
      {countries.map((c, index) => (
        <CountryCard key={index} country={c} navigation={navigation} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
