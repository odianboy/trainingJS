'use strict'

/*
Подсчёт количества свойств объекта
Напишите функцию count(obj), которая возвращает количество свойств объекта:
 */

let user = {
    name: 'John',
    age: 30
};

function  count(obj) {
    return Object.entries(obj).length;
}

console.log( count(user) );
