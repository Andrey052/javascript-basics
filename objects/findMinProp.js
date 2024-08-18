/**
 * Функция, которая принимает на вход объект и возвращает название свойства с наименьшим значением.
 * @param {object} obj - входной объект
 * @return {string} - название свойства с наименьшим значением
 */
function findMinProp(obj) {
    // ваш код здесь
    const values = Object.values(obj);
    const minValue = Math.min(...values);
    return Object.keys(obj)[values.indexOf(minValue)];
}

// Примеры:
console.log(findMinProp({a: 2, b: 5, c: 1})); // 'c'
console.log(findMinProp({x: 10, y: -5, z: 0})); // 'y'
console.log(findMinProp({foo: 100, bar: 200, baz: 50})); // 'baz'
