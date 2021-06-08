'use strict'

/*
Создаём Accumulator
важность: 5
Напишите функцию-конструктор Accumulator(startingValue).

Объект, который она создаёт, должен уметь следующее:

Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
Метод read() использует prompt для получения числа и прибавляет его к свойству value.
Таким образом, свойство value является текущей суммой всего,
что ввёл пользователь при вызовах метода read(), с учётом начального значения startingValue.
 */

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function () {
        this.num = +prompt('Введите Ваше число', '0');
        this.value += this.num;
    }
}

let accumulator = new Accumulator(5);

accumulator.read();
accumulator.read();

alert(accumulator.value);
