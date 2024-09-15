/**
    Задача "Flatten".
    Напишите функцию flatten(arr), которая принимает массив, содержащий вложенные массивы, и возвращает новый массив,
    в котором все элементы исходного массива и его вложенных массивов расположены на одном уровне.
    Например, flatten([1, [2, 3], [4, [5, 6]]]) должна вернуть [1, 2, 3, 4, 5, 6].
* */
function flatten(arr) {
    // Your code
    return arr.flat(Infinity);
}

/*
метод flat(Infinity) разворачивает массив на всех уровнях вложенности, 
независимо от того, сколько их.
*/
