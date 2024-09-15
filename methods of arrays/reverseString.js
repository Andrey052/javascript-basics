/**
 * Функция, которая принимает на вход строку и возвращает ее обратный порядок.
 * @param {string} str - входная строка
 * @return {string} - строка, обращенная задом наперед
 */
function reverseString(str) {
    // ваш код здесь
    return str.split('').reverse().join('');
}

/*
str.split('') — метод split() разбивает строку на массив символов. 
Каждый символ строки становится отдельным элементом массива.

reverse() — метод массивов, который изменяет порядок элементов на 
обратный.

join('') — метод join() объединяет элементы массива обратно в строку.
*/
