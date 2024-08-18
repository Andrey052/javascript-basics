/**
 * Напишите функцию isPalindrome(value) определяющую,
 * является ли переданная строка палиндромом, то есть строкой,
 * которая одинаково читается слева направо и справа налево.
 *
 * Пример:
 *
 * isPalindrome('121') === true
 * isPalindrome('boob') === true
 * isPalindrome('true') === false
 *
 * @param {string} value
 * @returns {boolean}
 */
function isPalindrome(value) {
    if (value.length <= 1) {
        return true;
    }

    if (value[0] !== value[value.length - 1]) {
        return false;
    }

    return isPalindrome(value.slice(1, value.length - 1));
}

console.log(
    isPalindrome('121'),
    isPalindrome('boob'),
    isPalindrome('true'));

module.exports = isPalindrome;
