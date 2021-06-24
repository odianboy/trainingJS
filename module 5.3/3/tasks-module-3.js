'use strict'

/*
Усечение строки
Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и,
 если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.
 */

function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.substr(0, maxlength -1) + '…';
    } else {
        return str;
    }
}

alert( truncate("Всем привет!", 20) );
