/* formula is correct, but the content is not so close
for(let rep = 1; rep <= 10; rep++) {
    console.log(`bills${rep}`);
}
*/

const bills = [
    22, 295, 176, 440, 37, 105, 10, 1100, 86, 52
]

/*const calcTip = function (bills) {
    return bills <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
}
const bill1 = 125;
const bill2 = 555;
const bill3 = 44;
const bills = [125, 555, 44];
*/

// I was pretty close... until this point.

// so it turns out that there is no way I can calculate bill and tip together.

//additional info
const tips = [];

const totals = [];

const calcTip = function (bills) {
    return bills <= 300 && bills >= 50 ? bills * 0.15 : bills * 0.2;
}

for(let i = 0; i = bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);
