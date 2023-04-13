
const x = ;
x >= 50 && <= 300 ? console.log('no extra tip to be paid.'):
console.log('an extra tip of 20% is charged.')

// Okay, the instructor has completed the task in a completely differnet way.

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log('The bill was ${bill}, the tip was ${tip}, and the total value
${bill + tip}')