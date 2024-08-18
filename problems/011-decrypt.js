/**
 * Самый простой способ зашифровать строку – сдвиг букв.
 * Под сдвигом понимается замена буквы на предыдущую в алфавите.
 * Если предыдущей буквы нет, она заменяется на последнюю букву алфавита (в этой задаче мы имеем дело с английским алфавитом).
 *
 * Вам прислали секретное сообщение, зашифрованное способом, описанным выше и состоящее из строчных английских букв.
 *
 * Напишите функцию decrypt(secret) которая расшифрует и вернет его.
 *
 * Пример:
 *
 * decrypt('bnqqdbs') === 'correct'
 * decrypt('zmc vd hfmnqd rozbdr') === 'and we ignore spaces'
 *
 * @param {string} secret
 * @returns {string}
 */
function decrypt(secret) {
    let result = '';

    for (let i = 0; i < secret.length; i++) {
        let char = secret[i];
        if (char === ' ') {
            result += ' ';
        } else if (char === 'a') {
            result += 'z';
        } else {
            result += String.fromCharCode(char.charCodeAt(0) - 1);
        }
    }

    return result;
}

function decrypt(secret) {
    let noSecret = secret.split('');
    noSecret = noSecret.map((item) => {
        if (item === 'z') return 'a';
        if (item === ' ') return item;

        let charCode = item.charCodeAt();

        return String.fromCharCode(charCode + 1);
    });

    return noSecret.join('');
}

console.log(
    decrypt('bnqqdbs'),
    decrypt('zmc vd hfmnqd rozbdr'));

module.exports = decrypt;
