'use strict'

/*
Сумма введённых чисел
Напишите функцию sumInput(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
 */

function sumInput() {
    let userNum;
    let dataNum = [];
    let sumNum = 0;

    while (true) {
        userNum = prompt('Введите Ваше число', '0');

        if  (isNaN(userNum) || userNum === null || userNum === '') {
            break;
        }
        dataNum.push(+userNum);
    }

    for (let num of dataNum) {
        sumNum += num;
    }
    return sumNum;
}

alert(`Сумма чисел в массиве: ${sumInput()}`);
