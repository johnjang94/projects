// const jonas = {
//     job: 'teacher',
//     age: 2022-1976,
//     hasDriversLicense: true,
// }

// console.log(jonas.job);
// console.log(jonas.age);
// console.log(jonas.hasDriversLicense);

// console.log(Jonas is a (${age})-year old (${job}), and he (${hasDriversLicense}).);

// what I thought needed to be done was originally off the course that the instructor was thinking.

const jonas = {
    job: 'teacher',
    age: 2022 - 1976,
    hasDriversLicense: true,

    calcAge: function(age) {
        return 2022 - 1976;
    }
}

const getSummary = function() {
    return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
}

console.log(jonas.calcAge());
console.log(getSummary);
