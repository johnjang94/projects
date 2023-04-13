/*
const friend1 = 'Michael';
const friend2 = 'Steve';
const friend3 = 'Katherine';

const friends = [`Michael`, `Steve`, `Katherine`];
console.log(friends);
console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length-1]);
console.log(friends[friends.length-2]);
console.log(friends[friends.length-3]);

friends[2] = 'Claire';
console.log(friends);

const Jamie = ['Cliffton', 'Schemann', 2057 - 1998, 'MacKenzie', friends];
console.log(Jamie); */

// Exercise
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const years = [2007, 2010, 1958, 1785, 2022];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[3]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[3]), calcAge(years[years.length - 1])];
console.log(ages);