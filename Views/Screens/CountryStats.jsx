import { View, Text, StyleSheet } from 'react-native';

export default function CountryStats() {
  return (
    <View style={styles.container}>
      <Text>Pantalla de Detalles</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
