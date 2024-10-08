/**
 *
 * Петя, Катя и Сережа делают из бумаги журавликов.
 * Вместе они сделали X журавликов. Сколько журавликов сделал каждый ребенок, если известно,
 * что Петя и Сережа сделали одинаковое количество журавликов,
 * а Катя сделала в два раза больше журавликов, чем Петя и Сережа вместе?
 * (если это возможно, если нет, то у Кати должно быть журавликов минимум в 2 раза больше, как в примере 3)
 *
 * Напишите функцию computeOrizurus(total) которая вычислит
 * сколько журавликов сделал каждый ребенок.
 *
 * Пример:
 *
 * computeOrizurus(6) === [1, 4, 1]
 * computeOrizurus(24) === [4, 16, 4]
 * computeOrizurus(11) === [1, 9, 1]
 *
 * @param {number} total общее количество сделанных журавликов
 * @returns {number[]} массив чисел, где первый элемент это количество журавликов сделанных Петей,
 * второй элемент – Катей, третий – Сережей
 */
function computeOrizurus(total, P = 0) {
    const S = P;
    const K = total - 2 * P;

    if (K === 4 * P) {
        return [P, K, S];
    }

    if (P > total / 2) {
        return [Math.floor(total / 6), total - 2 * Math.floor(total / 6), Math.floor(total / 6)];
    }

    return computeOrizurus(total, P + 1);
}

console.log(
    computeOrizurus(6),
    computeOrizurus(24),
    computeOrizurus(11));

module.exports = computeOrizurus;
