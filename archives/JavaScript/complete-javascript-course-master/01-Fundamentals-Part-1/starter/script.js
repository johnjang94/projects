
/*let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jane');
console.log(15);

let firstName = 'Claire';
console.log(firstName); */

/*
const now = 2037;
const ageJames = now - 1998;
const ageAgnes = now - 1963;
console.log(ageJames, ageAgnes);

console.log(ageJames * 2, ageAgnes / 2);

/*const first_name = 'John';
const lastName = 'Jang';
console.log(first_name + ' ' + lastName);

let x = 10 + 5;
x += 10;
x++;
x--;
console.log(x); 

console.log(ageJames > ageAgnes);
//remember: >, <, >=, <=

const isFullAge = ageAgnes >= 40;

console.log(now - 1998 > now - 1963);
*/

/*const age = 15;
if (age>= 10) {
    console.log('James can drive.');
}

const age = 15;
if (age>= 18) {
    console.log('James can drive.');
} else {
    const yearsLeft = 18 - age;
    console.log(`James is yet too young. He should wait another ${yearsLeft} years :)`);
} */

/*
const birthYear = 1991;
if(birthYear <= 2000) {
    let century = 20;
} else {
    let century = 21;
}
*/

// const day = `Monday`;
// switch(day) {
//     case `Monday`:
//         console.log(`plan course structure`);
//         break;
    
//     case `Tuesday`:
//         console.log(`It is raining out there`);
//         break;

//     case `Wednesday`:
//         console.log(`Jessica was playing volleyball after school today`);
//         break;

//     case `Thursday`:
//     case `Friday`:
//         console.log(`YMCA is fully packed with people.`);
//         break;

//     case `Saturday`:
//         console.log(`Are you going to meet her again?`);
//         break;

//     case `Sunday`:
//         console.log(`Today is the last day to check your budget!`);
//         break;
// }

// // ...so this part worked out just like how the instructor has typed.

// if (day === 'Monday') {
//     console.log(`plan course structure`);
// } else if (day === 'Tuesday') {
//     console.log(`It is raining out there`);
// } else if (day === 'Wednesday') {
//     console.log(`Jessica was playing volleyball after school today`);
// } else if (day === 'Thursday'  day === 'Friday') {
//     console.log(`YMCA is fully packed with people.`);
// } else if (day === 'Saturday') {
//     console.log(`Are you going to meet her again?`);
// } else if (day === 'Sunday') {
//     console.log(`Today is the last day to check your budget!`);
// } else {
//     console.log(not a valid day);
// }

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);