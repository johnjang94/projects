// function describeCountry (country, population, capitalCity) {
//     console.log(country, population, capitalCity);
//     const describeCountry = `${country} has ${population} and its capital city is ${capitalCity}.`
//     return describeCountry;
// }

// describeCountry(`Finland`, `6 million people`, `Helsinki`);

function describeCountry (country, population, capitalCity) {
    console.log(country, population, capitalCity);
    const describeCountry = `${country} has ${population} and its capital city is ${capitalCity}.`
    return describeCountry;
}

const city = describeCountry(`Finland`, `6 million people`, `Helsinki`);
console.log(city);

// or
console.log(describeCountry(`Finland`, `6 million people`, `Helsinki`));

// answers

function describeCountry (country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const descKorea = describeCountry ('Korea', 20, 'Seoul');
const descCanada = describeCountry ('Canada', 10, 'Ottawa');
const descUSA = describeCountry ('USA', 50, 'Washington D.C.');
console.log(descKorea, descCanada, descUSA);