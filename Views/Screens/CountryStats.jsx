import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { useRoute } from '@react-navigation/native';
import { HistoricalDataService } from '../../controllers/HistoricalDataService';

const screenWidth = Dimensions.get('window').width;

export default function CountryStats() {
  const route = useRoute();
  const { country } = route.params;
  const [casesData, setCasesData] = useState({ labels: [], values: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const historical = await HistoricalDataService.getCountryHistoricalData(country.iso2);
        

        const processed = HistoricalDataService.processTimelineData(historical.timeline.cases);
        setCasesData(processed);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);
  const backgroundColor ='#F5F5F5';

  return (
    <View style={[styles.container, {backgroundColor}] }>
      <Text style={styles.title}>{country.country}</Text>
      <Image source={{ uri: country.flag }} style={styles.flag} />

      <Text>
        <Text style={styles.casesLabel}>Cases: </Text>
        <Text>{country.cases}</Text>
      </Text>

      <Text>
        <Text style={styles.recoveredLabel}>Recovered: </Text>
        <Text>{country.recovered}</Text>
      </Text>

      <Text>
        <Text style={styles.deathsLabel}>Deaths: </Text>
        <Text>{country.deaths}</Text>
      </Text>

      {casesData.labels.length > 0 && (
        <LineChart
          data={{
            labels: casesData.labels,
            datasets: [{ data: casesData.values}],
          }}
          width={screenWidth - 32}
          height={220}
          yAxisLabel=""
          chartConfig={{
            backgroundGradientFrom: backgroundColor,
            backgroundGradientTo: backgroundColor,
            color: (opacity = 1) => `rgba(0, 94, 209, ${opacity})`,
          }}
          style={[styles.graph,{ backgroundColor }]}
          verticalLabelRotation={90} 
          bezier
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  flag: {
    width: 80,
    height: 50,
    borderRadius: 5,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  casesLabel: {
    color: '#005ED1',
    fontWeight: 'bold',
  },
  recoveredLabel: {
    color: '#28A745',
    fontWeight: 'bold',
  },
  deathsLabel: {
    color: '#DC3545',
    fontWeight: 'bold',
  },
});
