/**
 * Функция, которая принимает на вход индекс и возвращает число Фибоначчи с этим индексом.
 * @param {number} n - индекс числа Фибоначчи
 * @return {number} - число Фибоначчи с заданным индексом
 */
function fibonacci(n) {
    // ваш код здесь
    if (n < 0) return undefined;
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

// Примеры:
console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(6)); // 8
console.log(fibonacci(12)); // 144
