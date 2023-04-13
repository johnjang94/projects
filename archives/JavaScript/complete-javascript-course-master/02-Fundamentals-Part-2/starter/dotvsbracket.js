// first, objects
/*
const john = {
    firstName: 'John',
    lastName: 'Jang',
    age: 2022 - 1994,
    job: 'Clerk at Loblaw Companies Limited',
    friends: ['Syndey', 'Aaron']
};
console.log(john);

// Dot or Bracket notion

console.log(john.lastName);
console.log(john['lastName']);

const nameKey = 'Name';
console.log(john['first' + nameKey]);
console.log(john['last' + nameKey]);

const interestedIn = prompt('What do you want to know about John? Please pick one: his first name, last name, age, job or friends?');

if (john[interestedIn]) {
    console.log(john[interestedIn]);
} else {
    console.log('wrong request. Please pick one: his first name, last name, age, job or friends?')
}
*/

// Challenge
const jonas = {
    name: 'Jonas',
    best_Friend: 'Michael',
    friends: ['Michael', 'Alisha', 'James']
};

const interestedIn = prompt('What do you want to know about Jonas? Please choose between his first name, best friend or friends.')

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('wrong request. Plase pick one: his name, best friend or friends.')
}

/* how the instructor did

console.log(`${jonas.firstName} has ${jonas.friends.length}, and his best friend is called ${jonas.bestFriend}.`);

