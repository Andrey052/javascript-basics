/**
 * Функция, которая принимает на вход число и возвращает его факториал.
 * @param {number} n - входное число
 * @return {number} - факториал числа
 */
function factorial(n) {
    return (n < 0) ? undefined : (n <= 1) ? 1 : n * factorial(n - 1);
}

// Примеры:
console.log(factorial(0)); // 1
console.log(factorial(5)); // 120
console.log(factorial(10)); // 3628800
