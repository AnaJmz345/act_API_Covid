import axios from 'axios';
import { CovidCountry } from '../models/CovidCountry';

const API_BASE_URL = 'https://disease.sh/v3/covid-19';

export class CovidApiService {
  static async getCountryHistoricalData(countryName) {
    try {
      const response = await axios.get(`${API_BASE_URL}/historical/${countryName}?lastdays=30`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener datos históricos:', error);
    }
  }

  static async processTimelineData() {
    const labels = Object.keys(timeline).map((date) => {
      const [month, day] = date.split('/');
      const formattedDay = day.toString().padStart(2, '0');
      const formattedMonth = month.toString().padStart(2, '0');
      return `${formattedDay}/${formattedMonth}`;
    });

    const values = Object.values(timeline);
    return { labels, values };

  }
}
