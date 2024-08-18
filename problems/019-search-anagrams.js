/**
 * Со словами-анаграммами мы познакомились в прошлой задаче.
 *
 * Напишите функцию searchAnagrams(value) возвращающую слова-анаграммы из предложения,
 * сохраняя их порядок и регистр букв
 *
 * Пример:
 *
 * searchAnagrams('Вижу апельсин значит живу. Спаниель') === 'Вижу апельсин живу Спаниель'
 *
 * @param {string} value
 * @returns {string}
 */
function searchAnagrams(value) {
    const words = value.split(/[\s,.!?;:()]+/);
    const groups = new Map();

    const normalize = str => str.toLowerCase().split('').sort().join('');

    for (let word of words) {
        const key = normalize(word);
        if (!groups.has(key)) {
            groups.set(key, []);
        }
        groups.get(key).push(word);
    }

    const result = [];

    for (let group of groups.values()) {
        if (group.length > 1) {
            result.push(...group);
        }
    }

    return result.join(' ');
}

console.log(searchAnagrams('Вижу апельсин значит живу. Спаниель'));

module.exports = searchAnagrams;
