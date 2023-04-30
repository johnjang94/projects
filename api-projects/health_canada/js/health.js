let info = [];
let searchInput = document.getElementById("search-input");
let searchText = document.getElementById("search-text");
let isClicked = false;
let searchButton = document.getElementById("search-button");

searchInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("search-button").click();
    searchInput.value = "";
  }
});

const getLatestInfo = async () => {
  let url = new URL(`https://node.hres.ca/nhp/product?key=8a5d1efa32598370`);
  let header = new Headers({ "x-key-gen-secret": "8a5d1efa32598370" });
  let response = await fetch(url, { headers: header });
  let data = await response.json();
  info = data.results;

  render();
};

const getInfoByKeyword = async () => {
  let keyword = document.getElementById("search-input").value;
  let url = new URL(`https://node.hres.ca/nhp/product?search=${keyword}`);

  let header = new Headers({ "x-key-gen-secret": "8a5d1efa32598370" });
  let response = await fetch(url, { headers: header });
  let data = await response.json();
  info = data.results;

  render();
};

const render = () => {
  let infoHTML = "";
  infoHTML = info
    .map((item) => {
      return `          <div class="info-cover">
    <h2 class="product_name">${item._source.product_name}</h2>
    <!-- this is the name of the product -->
    <span class="notice"
      >Please note: there is no picture for the product.</span
    >
    <div class="first-line type">
      <p>Type:</p>
      <p class="form">${item._source.dosage_form}</p>
    </div>
    <div class="type">
      <p>Frequency:</p>
      <p class="form">${item._source.product_dose[0].frequency} times a day.</p>
    </div>
    <div class="type">
      <p>Quantity per intake:</p>
      <p class="form">${item._source.product_dose[0].quantity_dose} pill at a time.</p>
    </div>
    <div class="type">
      <p>Target Age Group:</p>
      <p class="form">${item._source.product_dose[0].population_type_desc} only.</p>
    </div>
    <div class="description">
      <p>Ingredient / Product Description:</p>
      <p class="description_detail">
      ${item._source.product_purpose[0]}
      </p>
    </div>
    <div class="type">
      <p>Production company:</p>
      <p class="form">${item._source.company_name}</p>
    </div>
  </div>`;
    })
    .join("");

  document.getElementById("product-board").innerHTML = infoHTML;
};

searchButton.addEventListener("click", getInfoByKeyword);
getLatestInfo();
