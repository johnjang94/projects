let animal = [];
let animal_name = [];

const getAnimalInfo = async () => {
  let url = new URL(
    `https://api.api-ninjas.com/v1/animals?name=cheetah&page_size=10`
  );
  let header = new Headers({
    "X-Api-Key": "UexeFG0uGymDqlI9sdlOkQ==B9TE0O7jBPdnjqKh",
  });
  let response = await fetch(url, { headers: header });
  let data = await response.json();

  animal = data[0].characteristics;
  animal_name = data[0].name;

  render();
};

const render = () => {
  let animalHTML = "";
  animalHTML = animal
    .map((animal) => {
      return `<div class="center">
    <h2 class="animal_name">Cheetah</h2>
    <span class="notice"
      >Please note: there is no picture for the animal.</span
    >
  </div>
  <div class="line detail first-gap">
    <p class="habitat">Habitat:</p>
    <p class="responses">Location</p>
  </div>
  <div class="line detail gap">
    <p class="food">Food:</p>
    <p class="responses">Prey</p>
  </div>
  <div class="line detail gap">
    <p>Activities:</p>
    <p class="responses">group behaviour</p>
  </div>
  <div class="line detail gap">
    <p class="slogan">Known for:</p>
    <p class="responses">Slogan</p>
  </div>`;
    })
    .join("");

  console.log(animalHTML);

  document.getElementById("info-board").innerHTML = animalHTML;
};

getAnimalInfo();
