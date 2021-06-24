'use strict'

/*
Фильтрация по диапазону
Напишите функцию filterRange(arr, a, b), которая принимает массив arr,
ищет в нём элементы между a и b и отдаёт массив этих элементов.

Функция должна возвращать новый массив и не изменять исходный.
 */

function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log( filtered );

console.log( arr );
