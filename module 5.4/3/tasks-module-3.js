'use strict'

/*
Вызов в контексте массива
Каков результат? Почему?

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); // ?
 */

/*
Ответ: в роли obj – arr, а в роли method – 2.
Он получает в качестве this объект arr и выводит массив: "a","b",function.
 */
