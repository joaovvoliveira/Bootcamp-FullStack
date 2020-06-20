import React, { Component } from "react";
import Countries from "./components/countries/Countries";
import Header from "./components/header/Header";
import { formatNumber } from "./helpers/formatNumbers";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      allCountries: [],
      filteredCountries: [],
      filter: "",
      populationCountries: "",
    };
  }

  async componentDidMount() {
    const res = await fetch("https://restcountries.eu/rest/v2/all");
    const json = await res.json();
    let allCountries = json.map((country) => {
      const { translations, numericCode, population, flag } = country;
      return {
        id: numericCode,
        name: translations.pt,
        filterName: translations.pt.toLowerCase(),
        population,
        flag,
      };
    });

    const populationCountries = this.calculateTotalPopulation(allCountries);

    this.setState({
      allCountries,
      filteredCountries: Object.assign([], allCountries),
      populationCountries,
    });
  }

  calculateTotalPopulation = (countries) => {
    const totalPopulation = countries.reduce((a, b) => {
      return a + b.population;
    }, 0);
    return totalPopulation;
  };

  handleChangeFilter = (newText) => {
    this.setState({
      filter: newText,
    });
    const { allCountries } = this.state;

    const filterLowerCase = newText.toLowerCase();

    const filteredCountries = allCountries.filter((country) => {
      return country.filterName.includes(filterLowerCase);
    });

    const populationCountries = this.calculateTotalPopulation(
      filteredCountries
    );

    this.setState({
      filteredCountries,
      populationCountries,
    });
  };

  render() {
    const { filteredCountries, filter, populationCountries } = this.state;

    return (
      <div className="container">
        <h1 style={styles.titleCentered}> React Countries </h1>
        <Header
          filter={filter}
          onChangeFilter={this.handleChangeFilter}
          countriesLength={filteredCountries.length}
          population={formatNumber(populationCountries)}
        />
        <Countries countries={filteredCountries} />
      </div>
    );
  }
}

const styles = {
  titleCentered: {
    textAlign: "center",
  },
};
