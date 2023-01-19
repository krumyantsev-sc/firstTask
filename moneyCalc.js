function getMoneyString(coins) {
    if (isNaN(coins)) {
        return "Неверная строка";
    }
    if (coins < 0) {
        return "Отрицательное число";
    }
    let coinString, rubString;
    let rubles = parseInt(coins/100);
    if ((coins % 100 === 11) || (coins % 100 == 12) || (coins % 100 == 13) || (coins % 100 == 14)) {
        coinString = `${coins % 100} копеек`;
    } else if (coins % 10 == 1) {
        coinString = `${coins % 100} копейка`;
    } else if ((coins % 10 == 2) || (coins % 10 == 3) || (coins % 10 == 4)) {
        coinString = `${coins % 100} копейки`;
    } else {
        coinString = `${coins % 100} копеек`; 
    }
    if ((rubles % 100 === 11) || (rubles % 100 == 12) || (rubles % 100 == 13) || (rubles % 100 == 14)) {
        coinString = `${rubles} рублей`;
    } else if (rubles % 10 == 1) {
        rubString = `${rubles} рубль`;
    } else if ((rubles % 10 == 2) || (rubles % 10 == 3) || (rubles % 10 == 4)) {
        rubString = `${rubles} рубля`;
    } else {
        rubString = `${rubles} рублей`; 
    }
    return rubString + " " + coinString;
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
