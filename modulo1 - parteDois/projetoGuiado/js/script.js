let tabCountries = null;
let tabFavorites = null;

let allCountries = null;
let favoriteCountries = null;

let countCountries = 0;
let countFavorites = 0;

let totalPopulationList = 0;
let totalPopulationFavorites = 0;

let numberFormat = null;

window.addEventListener("load", () => {
  tabCountries = document.querySelector("#tabCountries");
  tabFavorites = document.querySelector("#tabFavorites");

  countCountries = document.querySelector("#countCountries");
  countFavorites = document.querySelector("#countFavorites");

  totalPopulationList = document.querySelector("#totalPopulationList");
  //prettier-ignore
  totalPopulationFavorites = document.querySelector("#totalPopulationFavorites");

  numberFormat = Intl.NumberFormat("pr-BR");
  fetchCountries();
});

async function fetchCountries() {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const json = await res.json();
  allCountries = json.map((country) => {
    const { numericCode, translations, population, flag } = country;
    return {
      id: numericCode,
      name: translations.pt,
      population,
      flag,
    };
  });
  favoriteCountries = [];
  render();
}

function render() {
  renderCountryList();
  renderFavorites();
  renderSummary();
  handleCountryButtons();
}

function renderCountryList() {
  let countriesHTML = "<div>";

  allCountries.forEach((country) => {
    const { name, population, flag, id } = country;

    const countryHTML = `
    <div class='country'>   
    <div class='align'>
    <input type='submit' id='${id}' class='btn' value='+'>
    </div>
    <div class='align'>
    <img src='${flag}' alt='${name}'>
    </div>
    <ul class='align'>
    <li>${name}</li>
    <li>${population}</li>
    </ul>
    </div>
    `;

    countriesHTML += countryHTML;
  });
  tabCountries.innerHTML = countriesHTML;
}

function renderFavorites() {
  let favoritesHTML = "<div>";

  favoriteCountries.forEach((country) => {
    const { name, population, flag, id } = country;

    const favoriteHTML = `
    <div class='country'>   
    <div class='align'>
    <input type='submit' id='${id}' class='btn' value='-' style="background-Color: red">
    </div>
    <div class='align'>
    <img src='${flag}' alt='${name}'>
    </div>
    <ul class='align'>
    <li>${name}</li>
    <li>${population}</li>
    </ul>
    </div>
    `;

    favoritesHTML += favoriteHTML;
  });

  tabFavorites.innerHTML = favoritesHTML;
}

function renderSummary() {
  countCountries.textContent = allCountries.length;
  countFavorites.textContent = favoriteCountries.length;

  const totalPopulation = allCountries.reduce((acc, curr) => {
    return (acc += curr.population);
  }, 0);
  const totalFavorites = favoriteCountries.reduce((acc, curr) => {
    return (acc += curr.population);
  }, 0);

  totalPopulationList.textContent = totalPopulation;
  totalPopulationFavorites.textContent = totalFavorites;
}

function handleCountryButtons() {
  const countryButton = Array.from(tabCountries.querySelectorAll(".btn"));
  const favoriteButton = Array.from(tabFavorites.querySelectorAll(".btn"));

  countryButton.forEach((button) => {
    button.addEventListener("click", () => addToFavorites(button.id));
  });

  favoriteButton.forEach((button) => {
    button.addEventListener("click", () => removeToFavorites(button.id));
  });
}

function addToFavorites(id) {
  const countryToAdd = allCountries.find((country) => country.id === id);
  favoriteCountries = [...favoriteCountries, countryToAdd];

  favoriteCountries.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  allCountries = allCountries.filter((country) => country.id !== id);
  render();
}

function removeToFavorites(id) {
  const countryToRemove = favoriteCountries.find(
    (country) => country.id === id
  );
  allCountries = [...allCountries, countryToRemove];

  allCountries.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  favoriteCountries = favoriteCountries.filter((country) => country.id !== id);
  render();
}
