'use strict'

/*
Сумма пользовательских чисел
Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.
 */

function sumNum() {
    let a = +prompt('Введите первое число', '0');
    let b = +prompt('Введите второе число', '0');
    let result = a + b;
    return alert( +result.toFixed(2) );
}

sumNum();