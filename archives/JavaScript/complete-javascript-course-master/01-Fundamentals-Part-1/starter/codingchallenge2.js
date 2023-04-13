/*
let weightMark = 78;
let weightJohn = 92;

let heightMark = 169;
let heightJohn = 195;

console.log(weightMark / (heightMark * heightMark));
/* BMI for Mark */
console.log(weightJohn / (heightJohn * heightJohn));
/* BMI for John */

/*
const BMIMark = weightMark / heightMark ** 2;
const BMIJohn = weightJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if(BMIMark > BMIJohn) {
    console.log(`John's BMI is higher than Mark's BMI.`);
} else {
    console.log(`Mark's BMI is higher than John's BMI`);
}

/* My example:
const BMIMark = 28.3;
const BMIJohn = 23.9;

if(BMIMark > BMIJohn) {
    console.log(`John's BMI is higher than Mark's BMI.`);
} else {
    console.log(`Mark's BMI is higher than John's BMI`);
}
*/

// how did the instructor do?

const BMIMark = weightMark / heightMark ** 2;
const BMIJohn = weightJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if(BMIMark > BMIJohn) {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's BMI (${BMIMark}).`);
} else {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn})`);