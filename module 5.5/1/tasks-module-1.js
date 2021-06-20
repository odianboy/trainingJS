'use strict'

/*
Переведите текст вида border-left-width в borderLeftWidth
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

То есть дефисы удаляются, а все слова после них получают заглавную букву.
 */

function camelize(str) {
    let camelWord = '';
    let arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '-') {
            arr[i + 1] = arr[i + 1].toUpperCase();
            arr.splice(i, 1);
        }
    }
    for (let word of arr) {
        camelWord += word;
    }
    return camelWord;
}

console.log( camelize("background-color") );

// Решение из учебника:
function camelize(str) {
    return str
        .split('-')
        .map(
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join('');
}
