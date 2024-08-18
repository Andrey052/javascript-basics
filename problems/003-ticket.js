/**
 * Счастливым билетом называют такой билет с шестизначным номером,
 * где сумма первых трех цифр равна сумме последних трех.
 *
 * Напишите функцию checkTicket(number) которая проверяет счастливость билета.
 *
 * Пример:
 *
 * checkTicket('005212') === true
 * checkTicket('133700') === true
 * checkTicket('123032') === false
 *
 * @param {string} number
 * @returns {boolean}
 */
function checkTicket(number, index = 0, firstHalfSum = 0, secondHalfSum = 0) {
    if (index === 3) {        
        return firstHalfSum === secondHalfSum;
    }
    
    firstHalfSum += parseInt(number[index]);
    
    secondHalfSum += parseInt(number[5 - index]);
    
    return checkTicket(number, index + 1, firstHalfSum, secondHalfSum);
}

console.log(checkTicket('123123'));
console.log(checkTicket('123133'));

module.exports = checkTicket;
