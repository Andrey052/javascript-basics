/**
 * Слова-анаграммы — это слова, записанные одними и теми же буквами в разном порядке,
 * регистр букв при этом игнорируется.
 * Анаграммами, например, являются слова «Волос» и «СЛОВО».
 *
 * Напишите функцию anagram(x, y) проверяющую, являются ли x и y словами-анаграммами.
 *
 * Пример:
 *
 * anagram('Волос', 'Слово') === true
 * anagram('Живу', 'Вижу') === true
 *
 * @param {string} x
 * @param {string} y
 * @returns {boolean}
 */
function anagram(x, y) {
    const getCharMap = str => {
        const map = new Map();
        for (let char of str.toLowerCase()) {
            map.set(char, (map.get(char) || 0) + 1);
        }
        return map;
    };

    const mapX = getCharMap(x);
    const mapY = getCharMap(y);

    if (mapX.size !== mapY.size) {
        return false;
    }

    for (let [char, count] of mapX) {
        if (count !== mapY.get(char)) {
            return false;
        }
    }

    return true;
}

console.log(anagram('Волос', 'Слово'));
console.log(anagram('Живу', 'Вижу'));
console.log(anagram('Тишина', 'Шинтима'));
console.log(anagram('abc', 'cba'));

module.exports = anagram;
