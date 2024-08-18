/**
 * Напишите функцию getTimeDelta(x, y) определяющую,
 * сколько секунд прошло между двумя моментами времени x и y.
 *
 * Время передается в формате 'HH:MM:SS'. Минимальное значение – '00:00:00', максимальное – '23:59:59'.
 *
 * По условию x всегда меньше y.
 *
 * Пример:
 *
 * getTimeDelta('00:00:00', '00:00:01') === 1
 * getTimeDelta('01:01:01', '02:02:02') === 3661
 * getTimeDelta('01:19:30', '01:20:20') === 50
 *
 * @param {string} x
 * @param {string} y
 * @returns {number} разница между x и y в секундах
 */
function getTimeDelta(x, y) {
    function toDate(time) {
        const [hours, minutes, seconds] = time.split(':').map(Number);
        return new Date(1970, 0, 1, hours, minutes, seconds);
    }

    const dateX = toDate(x);
    const dateY = toDate(y);
    
    const deltaMilliseconds = dateY - dateX;
    
    return Math.floor(deltaMilliseconds / 1000);
}

console.log(
    getTimeDelta('00:00:00', '00:00:01'),
    getTimeDelta('01:01:01', '02:02:02'),
    getTimeDelta('01:19:30', '01:20:20'));

module.exports = getTimeDelta;
