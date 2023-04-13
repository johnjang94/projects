/* Data from the course

// Function expression

const calcAge2 = function(birthYear) {
    return 2037 - birthYear;
}

// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

*/

// edited on Nov. 3, 2022
function percentageOfWorld1(population) {
    return China = (population / 7900) * 100;
}

const population1 = percentageOfWorld1(1441);
console.log(population1);

const percentageOfWorld3 = population => (population / 7900) * 100;
const popKorea = percentageOfWorld3(20);
const popCanada = percentageOfWorld3(10);
const popUSA = percentageOfWorld3(50);
console.log(popKorea, popCanada, popUSA);