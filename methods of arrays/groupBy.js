/**
 Задача "Group by". Напишите функцию groupBy(arr, key), которая принимает массив объектов и строку key, соответствующую
 ключу объекта, по которому нужно сгруппировать элементы. Функция должна возвращать новый объект, где каждый ключ -
 уникальное значение, полученное из свойства key, а каждое значение - массив объектов, у которых значение свойства key
 равно ключу. Например, groupBy([{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}, {id: 3, name: 'Alice'}], 'name') должна
 вернуть {Alice: [{id: 1, name: 'Alice'}, {id: 3, name: 'Alice'}], Bob: [{id: 2, name: 'Bob'}]}.
 * */
function groupBy(arr) {
    // Your code
    const result = {};
    arr.forEach(item => {
        const groupKey = item[key];
        
        if (!result[groupKey]) {
            result[groupKey] = [];
        }
        
        result[groupKey].push(item);
    });
    
    return result;
}

/*
const result = {}; — создаем пустой объект, который будет хранить 
сгруппированные объекты.

arr.forEach(item => {...}) — используем метод forEach, чтобы пройтись по 
каждому элементу массива.

const groupKey = item[key]; — для каждого объекта берем значение, 
соответствующее указанному ключу. Это значение будет использоваться в 
качестве ключа для группировки.

if (!result[groupKey]) {...} — проверяем, существует ли уже такой ключ в 
объекте result. Если нет, создаем для него пустой массив.

result[groupKey].push(item); — добавляем текущий объект в массив, 
соответствующий ключу.

return result; — после того как все объекты обработаны, возвращаем 
сгруппированный результат.
*/
