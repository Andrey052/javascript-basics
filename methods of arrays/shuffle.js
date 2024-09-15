/**
 Задача "Shuffle". Напишите функцию shuffle(arr), которая принимает массив и перемешивает его элементы в случайном
 порядке. Функция должна изменять исходный массив, а не возвращать новый. Например, shuffle([1, 2, 3, 4, 5]) может
 вернуть [3, 1, 5, 4, 2].
 * */
function shuffle(arr1, arr2) {
    // Your code
    return arr1.sort(() => Math.random() - 0.5);
}
console.log(shuffle([1, 2, 3, 4, 5]));

/*
arr1.sort() — метод sort() сортирует массив, принимая функцию сравнения 
в качестве аргумента.

Функция сравнения () => Math.random() - 0.5:
Math.random() генерирует случайное число от 0 до 1.
Когда случайное число меньше 0.5, результат Math.random() - 0.5 будет 
отрицательным, что означает, что элементы меняются местами.
Когда случайное число больше 0.5, результат будет положительным, 
что означает, что порядок остаётся неизменным.
Таким образом, метод sort() с этой функцией будет случайным образом 
менять порядок элементов массива.
*/