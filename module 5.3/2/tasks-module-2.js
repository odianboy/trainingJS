'use strict'

/*
Проверка на спам
Напишите функцию checkSpam(str), возвращающую true,
если str содержит 'viagra' или 'XXX', а иначе false.

Функция должна быть нечувствительна к регистру.
 */

let forbiddenWords = ['viagra', 'xxx']

function checkSpam(str, arr) {
    let word = str.toLowerCase();

    for (let value of arr) {
        if (word.includes(value)) {
            return value
        }
    }
    return console.log('Совпадений не найдено!')
}

console.log( checkSpam('fgfgxxx', forbiddenWords) );
