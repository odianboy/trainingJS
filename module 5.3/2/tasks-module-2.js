'use strict'

/*
Проверка на спам
Напишите функцию checkSpam(str), возвращающую true,
если str содержит 'viagra' или 'XXX', а иначе false.

Функция должна быть нечувствительна к регистру.
 */

function checkSpam(str) {
    let word = str.toLowerCase();

    return word.includes('viagra') || word.includes('xxx');

}

alert( checkSpam('innocent rabbit') );
