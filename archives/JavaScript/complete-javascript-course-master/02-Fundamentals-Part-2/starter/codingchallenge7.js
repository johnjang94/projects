/*
const johnSmith = {
    name: 'John Smith',
    mass: 92,
    height: 1.95,
};

const calcJohnBMI = function () {
    return ;
};

console.log(92 / (1.95 * 1.95));

const markMiller = {
    namE: 'Mark Miller',
    masS: 78,
    heighT: 1.69,
};

const calcMarkBMI = function () {
    return ;
};

console.log(78 / (1.69 * 1.69));

console.log(calcJohnBMI, calcMarkBMI);

const winner = function(calcJohnBMI, calcMarkBMI) {
    if (calcJohnBMI > calcMarkBMI) {
        console.log(`${johnSmith.name}'s ${calcJohnBMI} is higher than ${markMiller.namE}'s ${calcMarkBMI}.`);
         } else if (calcJohnBMI < calcMarkBMI) {
            console.log('incorrect')
            } else {
                console.log(`they weigh the same`);
        } 
}


console.log(winner(calcJohnBMI, calcMarkBMI));
*/

// I was quite close!!!!
// answers from the instructor

const mark = {
    namE: 'Mark Miller',
    masS: 78,
    heighT: 1.69,

    calcBMI: function () {
        mark.bmi = mark.mass / mark.height ** 2;
        return mark.bmi;
    }
};

const john = {
    name: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

mark.calcBMI();
console.log(mark.bmi);

john.calcBMI();
console.log(john.bmi);

console.log(mark.bmi, john.bmi);

//the below part was quiite similar...
if (mark.bmi > john.bmi) {
    console.log(`${mark.namE}'s BMI (${mark.bmi}) is higher than ${john.name}'s BMI ${john.bmi}.`)
} else {
    console.log(`${john.name}'s BMI (${john.bmi}) is higher than ${mark.namE}'s BMI ${mark.bmi}.`)
}