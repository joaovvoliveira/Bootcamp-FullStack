// Estado da Aplicação

let tabCountries = null;
let tabFavorites = null;

let allCountries = [];
let favoriteCountries = [];

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
  // prettier-ignore
  totalPopulationFavorites = document.querySelector("#totalPopulationFavorites");

  numberFormat = Intl.NumberFormat("pt-BR");

  fetchCountries();
});

async function fetchCountries() {
  const countries = await fetch("https://restcountries.eu/rest/v2/all");
  const json = await countries.json();
  allCountries = json.map((country) => {
    const { numericCode, translations, population, flag } = country;
    return {
      id: numericCode,
      name: translations.pt,
      population,
      formattedPopulation: formatNumber(population),
      flag,
    };
  });
  // orderIdCountries();
  render();
}

function render() {
  renderCountryList();
  renderFavoritesList();
  renderSummary();
  renderCountryButtons();
}

function renderCountryList() {
  let countriesHTML = "<div>";

  allCountries.forEach((country) => {
    const { name, flag, id, formattedPopulation } = country;

    const countryHTML = ` <div class='country'>
        <div class='align'>
          <input id="${id}" type=submit class='btn' value='+'>
        </div>
        <div class='align'>
          <span><img src='${flag}' alt='${name}'/></span>
        </div>
        <div class='align'>
          <p>${name}</p>
          <p>${formattedPopulation}</p>
        </div>`;
    countriesHTML += countryHTML;
  });
  countriesHTML += "</div>";
  tabCountries.innerHTML = countriesHTML;
}

function renderFavoritesList() {
  let favoritesHTML = "<div>";

  favoriteCountries.forEach((country) => {
    const { name, flag, id, formattedPopulation } = country;

    const favoriteCountryHTML = ` <div class='country'>
        <div class='align'>
          <input id="${id}" type=submit class='btn' value='-' style="background-color: #cc0000">
        </div>
        <div class='align'>
          <span><img src='${flag}' alt='${name}'/></span>
        </div>
        <div class='align'>
          <p>${name}</p>
          <p id='qtdTotal'>${formattedPopulation}</p>
        </div>
      </div>`;
    favoritesHTML += favoriteCountryHTML;
  });

  favoritesHTML += "</div>";
  tabFavorites.innerHTML = favoritesHTML;
}

function renderSummary() {
  countCountries.textContent = allCountries.length;
  countFavorites.textContent = favoriteCountries.length;

  const totalPopulation = allCountries.reduce((cc, cur) => {
    return (cc += cur.population);
  }, 0);

  const totalFavorites = favoriteCountries.reduce((cc, cur) => {
    return (cc += cur.population);
  }, 0);

  totalPopulationList.textContent = formatNumber(totalPopulation);
  totalPopulationFavorites.textContent = formatNumber(totalFavorites);
}

function renderCountryButtons() {
  const countryButtons = Array.from(tabCountries.querySelectorAll(".btn"));
  const favoriteButton = Array.from(tabFavorites.querySelectorAll(".btn"));

  countryButtons.forEach((button) => {
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

function orderIdCountries() {
  let count = 0;
  allCountries.forEach((country) => {
    country.id = ++count;
  });
}

function formatNumber(number) {
  return numberFormat.format(number);
}
