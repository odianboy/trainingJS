'use strict'

/*
Перепишите функцию, используя оператор '?' или '||'
важность: 4
Следующая функция возвращает true, если параметр age больше 18.

В ином случае она задаёт вопрос confirm и возвращает его результат.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.

Сделайте два варианта функции checkAge:

Используя оператор ?
Используя оператор ||
 */

// 1. Используя оператор ?

const legalAge = 18

function checkAge(age) {
    return (age > legalAge) ? true : confirm('Родители разрешили?');
}

// 2. Используя оператор ||

function checkAgeTwo(age) {
    return (age > legalAge) || confirm('Родители разрешили?')
}
