'use strict'

/*
Напишите "if", аналогичный "switch"
Напишите if..else, соответствующий следующему switch:

switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}
 */

const nameBrowser = prompt('Введите название браузера', '')

if (nameBrowser === 'Edge') {
    alert('Youve got the Edge!');
} else if (nameBrowser === 'Chrome'
    || nameBrowser === 'Firefox'
    || nameBrowser === 'Safari'
    || nameBrowser === 'Opera') {
    alert('Okay we support these browsers too');
} else {
    alert('We hope that this page looks ok!');
}
