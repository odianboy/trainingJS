'use strict'

/*
Фильтрация по диапазону "на месте"
важность: 4
Напишите функцию filterRangeInPlace(arr, a, b),
которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b.
То есть, проверка имеет вид a ≤ arr[i] ≤ b.

Функция должна изменять принимаемый массив и ничего не возвращать.
 */

let arr = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i ++) {
        let value = arr.findIndex(item => (a > item || item > b));
        arr.splice(value, 1);
    }

}
console.log( filterRangeInPlace(arr, 1, 4) );
console.log( arr );
