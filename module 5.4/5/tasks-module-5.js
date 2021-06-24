'use strict'

/*
Подмассив наибольшей суммы
На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

Функция getMaxSubSum(arr) должна возвращать эту сумму.
 */

function getMaxSubSum(arr) {
    let maxSum  = 0;
    let currentSum = 0;

    for (let value of arr) {
        currentSum = Math.max(0, currentSum + value);
        maxSum  = Math.max(currentSum, maxSum);
    }
    return maxSum;
}

console.log( getMaxSubSum([-1, -2, -3]) );
