'use strict'

/*
Что выведет alert (ИЛИ)?
Что выведет код ниже?
 */

alert( alert(1) || 2 || alert(3) ); // 1, затем 2 (изначально указал 1)