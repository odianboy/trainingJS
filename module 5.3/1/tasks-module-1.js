'use strict'

/*
Сделать первый символ заглавным
Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
 */

function ucFirst(str) {
    if (str !== '') {
        let upperLetter = str[0].toUpperCase();
        let word = str.slice(1);
        return upperLetter + word;
    }
    return str;
}

alert( ucFirst('вася') );
