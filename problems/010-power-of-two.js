/**
 * Напишите функцию getPower(n) возвращающую целочисленное значение степени >= 0,
 * в которую нужно возвести двойку, чтобы получить n
 *
 * Пример:
 *
 * getPower(2) === 1            # 2^1 = 2
 * getPower(3) === undefined
 * getPower(256) === 8          # 2^8 = 256
 *
 * @param {number} n
 * @returns {number|undefined}
 */
function getPower(n) {
    if (n < 1) return undefined;

    let power = 0;
    while (n > 1) {
        if (n % 2 !== 0) {
            return undefined;
        }
        n = n / 2;
        power++;
    }
    return power;
}

console.log(
    getPower(2),
    getPower(3),
    getPower(256));

module.exports = getPower;
