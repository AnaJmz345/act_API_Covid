import axios from 'axios';
import { CovidCountry } from '../models/CovidCountry'; //no se necesita en js porque no se necesitan interfaces que definan los tipos de las variables

const API_BASE_URL = 'https://disease.sh/v3/covid-19';

export class CovidApiService {
  static async getAllCountries() {
    try {
      const response = await axios.get(`${API_BASE_URL}/countries`);
      return response.data.map((c) => CovidCountry(
          c.country,
          c.cases,
          c.recovered,
          c.deaths,
          c.population,
          c.countryInfo.flag
        ));
    } catch (error) {
      console.error('Error al obtener los países:', error);
    }
  }
}

/*UN JSON DE UN PAÍS QUE DEVUELVE LA API CON COUNTRIES 
{
  "country": "Mexico",
  "cases": 100000,
  "recovered": 90000,
  "deaths": 2000,
  "population": 126000000,
  "countryInfo": {
    "_id": 484,
    "iso2": "MX",
    "iso3": "MEX",
    "lat": 23,
    "long": -102,
    "flag": "https://disease.sh/assets/img/flags/mx.png"
  }
} */

/*Código en typescript
export class CovidApiService {
  static async getAllCountries(): Promise<CovidCountry[]> {
    const response = await axios.get(`${API_BASE_URL}/countries`);
    return response.data;
  }
}
*/