/*
function calcAverage1(Dolphins) {
    const score = (44 + 23 + 71) / 3;
    return score;
} 

function calcAverage2(Koalas) {
    const score = (65 + 54 + 49) / 3;
    return score;
}

// arrow function for Dolphins
const calcAverage1 = Dolphins => (44 + 23 + 71) / 3;
console.log(calcAverage1);

// arrow function for Koalas
const calcAverage2 = Koalas => (65 + 54 + 49) / 3;
console.log(calcAverage2);

function checkWinner(avgDolphins, avgKoalas) {
    console.log()
}
*/

// my goodness... I was so wrong 😭
// this is how the instructor did:

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 44, 69);
console.log(scoreDolphins, scoreKoalas);

const winner = function(avgDolphins, avgKoalas) {
    if (avgDolphin >= avgKoala * 2) {
        console.log(`Dolphins win the trophy.` (${avgDolphins} vs. (${avgKoalas})));
        else if (avgKoalas >= 2 * avgDolphins) {
            console.log(`Koalas Win` (${avgKoalas} vs. (${avgDolphins}))
            else {
                console.log(`no team wins`);
        } 
    }
}

checkWinner(scoreDolphins, scoreKoalas);

//  I think that I need to come back to this assignment and do it again myself.
// I do not know if I actually have understood this assignment
