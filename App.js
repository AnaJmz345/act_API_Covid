import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CountriesList from './Views/Screens/CountriesList';
import CountryStats from './Views/Screens/CountryStats';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#005ED1' }, 
          headerTintColor: '#fff',                    
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen
          name="CountriesList"
          component={CountriesList}
          options={{ title: 'Countries' }} // Texto en el header
        />
        <Stack.Screen
          name="CountryStats" 
          component={CountryStats}
          options={{ title: 'Covid-19' }}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
