/*
let isIsland = "Canada";
let population = "38.25 million";
let country = "Canada";
let language = "English";

console.log('isIsland' + 'population' + 'country' + 'language');
*/

// Correct answer

let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

/* 
understanding:
isIsland is a boolean value.
Boolean value only declares whether a value is 'true' or 'false'.
In this example, the assignment has decided to assign "false" value to see if it is
actually false.

that's why it's "let isIsland = false;"

The assignment also wanted the variable called "language" to exist
but without any value.

that's why it's "let language;" (and literally nothing else)

New lesson learned:
you cannot place multiple variables in one console.log
you need to separate each value into each console.log
