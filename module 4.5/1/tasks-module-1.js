'use strict'

/*
Две функции - один объект
Возможно ли создать функции A и B в примере ниже, где объекты равны new A()==new B()?

function A() { ... }
function B() { ... }

let a = new A;
let b = new B;

alert( a == b ); // true
 */

/*
Ответ: Да
Например если функции возвращают объект.

let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() ); // true
 */
