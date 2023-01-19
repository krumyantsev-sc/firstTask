function calculateMoney(coins, wordArr, moneyAmount) {
    let coinString;
    if ((coins % 100 > 10) && (coins % 100 < 15)) {
        coinString = `${moneyAmount} ${wordArr[0]}`;
    } else if (coins % 10 === 1) {
        coinString = `${moneyAmount} ${wordArr[1]}`;
    } else if ((coins % 10 > 1) && (coins % 10 < 5)) {
        coinString = `${moneyAmount} ${wordArr[2]}`;
    } else {
        coinString = `${moneyAmount} ${wordArr[0]}`;
    }
    return coinString;
}

function getMoneyString(coins) {
    if (isNaN(coins)) {
        return "Неверная строка";
    }
    if (coins < 0) {
        return "Отрицательное число";
    }
    let finalCoins = coins % 100;
    let rubles = parseInt(coins / 100);
    return  calculateMoney(rubles,["рублей", "рубль", "рубля"], rubles) +
        " " + calculateMoney(coins, ["копеек", "копейка", "копейки"], finalCoins);
}
console.log(getMoneyString(100));
console.log(getMoneyString(31));
console.log(getMoneyString(2));
console.log(getMoneyString(3));
console.log(getMoneyString(4));
console.log(getMoneyString(5));
console.log(getMoneyString(6));
console.log(getMoneyString(7));
console.log(getMoneyString(8));
console.log(getMoneyString(9));
console.log(getMoneyString(10));
console.log(getMoneyString(11));
console.log(getMoneyString(12));
console.log(getMoneyString(13));
console.log(getMoneyString(14));
console.log(getMoneyString(-1));
console.log(getMoneyString(2011));
console.log(getMoneyString(98720));
