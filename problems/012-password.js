/**
 * Пароль называется криптостойким,
 * если он включает в себя хотя бы одну строчную английскую букву,
 * хотя бы одну заглавную английскую букву и хотя бы одну цифру,
 * при этом его длина должна быть не менее 7 символов.
 *
 * Напишите функцию validatePassword(password) определяющую,
 * является ли переданный пароль криптостойким.
 *
 * Пример:
 *
 * validatePassword('abc4DEFG') === true
 * validatePassword('abcdefg') === false
 * validatePassword('abcdefG') === false
 * validatePassword('abcdef7') === false
 *
 * @param {string} password
 * @returns {boolean}
 */
function validatePassword(password) {
    if (password.length < 7) {
        return false;
    }

    const hasLower = password.split('').some(char => char >= 'a' && char <= 'z');
    const hasUpper = password.split('').some(char => char >= 'A' && char <= 'Z');
    const hasDigit = password.split('').some(char => char >= '0' && char <= '9');

    return hasLower && hasUpper && hasDigit;
}

module.exports = validatePassword;
