/**
 Задача "Zip". Напишите функцию zip(arr1, arr2), которая принимает два массива и возвращает новый массив, состоящий из
 пар элементов из arr1 и arr2, где элементы с одинаковыми индексами объединены в пары. Если длины массивов не
 совпадают, функция должна вернуть массив, длина которого равна длине более короткого из двух массивов. Например,
 zip([1, 2, 3], ['a', 'b', 'c']) должна вернуть [[1, 'a'], [2, 'b'], [3, 'c']].
 * */
function zip(arr1, arr2) {
    // Your code
    const result = [];
    const minLength = Math.min(arr1.length, arr2.length);

    for (let i = 0; i < minLength; i++) {
        result.push([arr1[i], arr2[i]]);
    }

    return result;
}

/*
Math.min(arr1.length, arr2.length) — определяем длину самого короткого 
массива, чтобы не выйти за его пределы.

Цикл — проходим по массивам и для каждого индекса создаём подмассив, 
состоящий из элементов с одинаковыми индексами.

result.push([arr1[i], arr2[i]]) — добавляем подмассивы в результирующий 
массив.
*/
