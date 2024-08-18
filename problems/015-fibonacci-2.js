/**
 * С числами Фибоначчи мы уже познакомились в прошлой задаче.
 *
 * Напишите функцию isFibonacci(value) которая определяет, является ли value числом Фибоначчи.
 *
 * Пример:
 *
 * isFibonacci(1) === 1
 * isFibonacci(2) === 3
 * isFibonacci(55) === 10
 * isFibonacci(52) === undefined
 *
 * @param {number} value
 * @returns {undefined|number}
 */
function isFibonacci(value) {
    if (value < 0) return undefined;

    let a = 0, b = 1, index = 0;

    while (b < value) {
        [a, b] = [b, a + b];
        index++;
    }

    if (b === value) {
        return index + 1;
    }

    return undefined;
}

console.log(isFibonacci(55));

module.exports = isFibonacci;
