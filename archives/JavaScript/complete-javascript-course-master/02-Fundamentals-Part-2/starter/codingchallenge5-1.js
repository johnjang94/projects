// declaration first
function averageKoalaScore1(averageScore1) {

}

const Kscore1 = averageKoalaScore1(65);
const Kscore2 = averageKoalaScore1(54);
const Kscore3 = averageKoalaScore1(49);
console.log((65 + 54 + 49) / 3); // averageKoalaScore1 = 56


function averageKoalaScore2(averageScore2) {
    
}

const Kscore4 = averageKoalaScore2(23);
const Kscore5 = averageKoalaScore2(34);
const Kscore6 = averageKoalaScore2(27);
console.log((23 + 34 + 27) / 3); // averageKoalaScore2 = 28


function averageDolphinScore1(averageScore3) {
    
}

const Dscore1 = averageDolphinScore1(44);
const Dscore2 = averageDolphinScore1(23);
const Dscore3 = averageDolphinScore1(71);
console.log((44 + 23 + 71) / 3); // averageDolphinScore1 = 46

function averageDolphinScore2(averageScore4) {
    
}

const Dscore4 = averageDolphinScore2(85);
const Dscore5 = averageDolphinScore2(54);
const Dscore6 = averageDolphinScore2(41);
console.log((85 + 54 + 41) / 3); // averageDolphinScore2 = 60


// to expression..
const averageKscore1 = function averageKoalaScore1(averageScore1) {
    return ((65 + 54 + 49) / 3);
}

const avE1 = averageKoalaScore1(56);
console.log(avE1);

// I honestly do not understand how to change function declaration into function expression
// how am I supposed to change function expression to arrow function?

// What have I learned?
/* I did the exact same thing that the instructor has done in a larger writing form */
/* but I didn't compare the scores to see which team won */

const winner = function(averageKoalaScore1, averageDolphinScore1) {
    if (averageKoalaScore1 >= averageDolphinScore1 * 2) {
        console.log(`Koalas win the trophy.` (${averageKoalaScore1} vs. (${averageDolphinScore1})));
    } else if (averageDolphinScore1 >= 2 * averageKoalaScore1) {
            console.log(`Koalas Win` ((${averageDolphinScore1}) vs. (${averageKoalaScore1})))
        }    else {
                console.log(`no team wins`);
            } 
}

checkWinner(averageKoalaScore1, averageDolphinScore1);