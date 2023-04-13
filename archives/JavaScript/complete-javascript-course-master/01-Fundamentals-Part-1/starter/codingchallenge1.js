/* Data 1*/
let weightMark = 78;
let weightJohn = 92;

let heightMark = 169;
let heightJohn = 195;

console.log(weightMark / (heightMark * heightMark));
/* BMI for Mark */
console.log(weightJohn / (heightJohn * heightJohn));
/* BMI for John */

/* Data 2 */
let weight2Mark = 95;
let weight2John = 85;

let height2Mark = 188;
let height2John = 176;

console.log(weight2Mark / (height2Mark * height2Mark));
/* BMI 2 for Mark */
console.log(weight2John / (height2John * height2John));
/* BMI 2 for John */

// the instructor for the course has used 'const' rather than 'let. 
// when it doesn't matter what I use for this assignment,
// the instructor would ususally use 'const' than 'let'.

// it turns out that I did not correctly calculate BMI for Mark and John.
// the instructor did not use console.log but used 'const' to get the number.

const BMIMark = weightMark / heightMark ** 2;
const BMIJohn = weightJohn / (heightJohn * heightJohn);
console.log(BMIMark > BMIJohn);