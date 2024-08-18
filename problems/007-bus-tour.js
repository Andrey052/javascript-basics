/**
 * На экскурсионном маршруте автобусу высотой 512 см встречаются несколько мостов.
 *
 * Напишите функцию checkBusTour(bridges) вычисляющую номер моста под которым не сможет проехать автобус.
 *
 * Пример:
 *
 * checkBusTour([600, 512]) === 2
 * checkBusTour([600, 1024]) === undefined  # Автобус успешно проедет по маршруту
 *
 * @param {number[]} bridges высоты мостов встречающихся на маршруте
 * @returns {undefined|number}
 */
function checkBusTour(bridges) {
    const busHeight = 512;
    let bridgeNumber = undefined;

    bridges.some((bridge, index) => {
        if (bridge < busHeight) {
            bridgeNumber = index + 1;
            return true;
        }
        return false;
    });

    return bridgeNumber;
}

console.log(
    checkBusTour([600, 512]),
    checkBusTour([600, 1024]),
    checkBusTour([600, 512, 100]));

module.exports = checkBusTour;
