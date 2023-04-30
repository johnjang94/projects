let countries = [];

const getCountryInfo = async () => {
  let url = new URL(`https://api.api-ninjas.com/v1/country?name=CA`);
  let header = new Headers({
    "X-Api-Key": "UexeFG0uGymDqlI9sdlOkQ==B9TE0O7jBPdnjqKh",
  });
  let response = await fetch(url, { headers: header });
  let data = await response.json();
  countries = data[0];
  console.log(countries);

  render();
};

const render = () => {
  let countriesHTML = "";
  countriesHTML = countries
    .map((countries) => {
      return ` <div class="row">
        <h1>${countries.name}</h1>
        <div class="country-info">
          <p>${countries.name} is a country that is located in ${countries.region}.</p>
          <p>${countries.name} uses ${countries[0].currency}, and its GDP is ${countries.gdp}.</p>
          <p>Canada's capital city is (capital city).</p>
          <p>Canada has (sex ratio).</p>
        </div>
      </div>`;
    })
    .join("");

  document.getElementById("info-board").innerHTML = countriesHTML;
};

getCountryInfo();
