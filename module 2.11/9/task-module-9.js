'use strict'

/*
Проверка логина
Напишите код, который будет спрашивать логин с помощью prompt.

Если посетитель вводит «Админ», то prompt запрашивает пароль,
если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

Пароль проверять так:

Если введён пароль «Я главный», то выводить «Здравствуйте!»,
Иначе – «Неверный пароль»,
При отмене – «Отменено».
 */

let userLogin = prompt('Введите ваш логин', '');
let passwordUser;

if (userLogin === 'Админ') {
    passwordUser = prompt('Введите ваш пароль', '')
    if (passwordUser === "Я главный") {
        alert(`Здравствуйте ${userLogin}!`);
    } else if (passwordUser === null) {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }
} else if (userLogin === '' || userLogin === null) {
    alert('Отменено')
} else {
    alert('Я вас не знаю!')
}