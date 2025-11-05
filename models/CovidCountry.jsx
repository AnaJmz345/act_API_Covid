/* EN TypeScript sería así, usé js porque al momento de crear mi proyecto le puse que fuera blank y se me creo en JS

export interface CovidCountry {
  country: string;
  cases: number;
  recovered: number;
  deaths: number;
  population: number;
  flag: string;
}*/

// CovidCountry.jsx

export function CovidCountry(country, cases, recovered, deaths, population,flag,iso2) {
  return {
    country, //string, los demás number
    cases,
    recovered,
    deaths,
    population,
    flag,
    iso2
  };
}

