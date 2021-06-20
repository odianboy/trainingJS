'use strict'

/*
Сортировать в порядке по убыванию
let arr = [5, 2, 1, -10, 8];

alert( arr ); // 8, 5, 2, 1, -10
 */

let arr = [5, 2, 1, -10, 8];

console.log( arr.sort( (a, b) => b - a ) );
