'use strict'

/*
Максимальная зарплата
У нас есть объект salaries с зарплатами:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

Если объект salaries пустой, то нужно вернуть null.
Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.
 */

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries) {

    let maxNum = 0;
    let nameEmployee = null;

    for (const [name, salary] of Object.entries(salaries)) {
        if (salary > maxNum) {
            maxNum = salary;
            nameEmployee = name;
        }
    }
    return nameEmployee;
}

console.log( topSalary(salaries) );
