import { View, Text, Button, StyleSheet } from 'react-native';

export default function CountriesList({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Bienvenido 👋</Text>
      <Button title="Ver detalles" onPress={() => navigation.navigate('CountryStats')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
