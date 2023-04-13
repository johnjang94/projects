const calcTip = function (bills) {
    return bills <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
}
const bill1 = 125;
const bill2 = 555;
const bill3 = 44;
const bills = [125, 555, 44];

// so it turns out that there is no way I can calculate bill and tip together.

const tips = bills <= 300 && bills >= 50 ? bills * 0.15 : bills * 0.2;
console.log(bills, tips);

const totals = [bills[0] + tips [0], bills[1] + tips[1], bills[2] +tips[3]];
console.log(bills, tips, totals);







