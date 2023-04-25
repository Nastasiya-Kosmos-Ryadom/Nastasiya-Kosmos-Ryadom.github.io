let A = 20

if (A <= 10) {
    console.log ('До 10 или 10')
}
else if (A >=30) {
    console.log ('После 30 или 30')
}
else {
    console.log ('После 10 до 30')
}

let F = 35;
switch (F) {
  case 77:
    console.log ('число 77');
    break;
  case 35:
    console.log ('число 35');
    break;
  case 15:
    console.log ('число 15');
    break;
  default:
    console.log ('другое число');
}
/*до бреака каждый вариант почему выполняется, после того, как дошли до тру?*/ 

let arr = [1,2,3,4,5,6,7];

for (let i=0; i<arr.length; i++) {
    console.log(arr[i]); /*если написать в скобках просто i, то выведет индексы c 0 по 6, а нам надо ЗНАЧЕНИЯ, поэтому arr[i]*/
}

let arrDay = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
for (let i=0; i<arr.length; i++) {
    console.log(arrDay[i]);
}

console.log('---------------------')

for (const iterator of arrDay) {
    console.log(iterator);
}

let arrFruits = ['aple', 'orange', 'peper'];
let obj = {
    arrFruits: ['aple', 'orange', 'peper'],
    user: {
        age:23,
        name: 'Max',
    },
    status: 'admin',
}

for (const iterator in obj) {
    console.log('свойство',iterator); /*выводит свойство*/
    console.log('значение',obj[iterator]);/*выводит значение*/

    if (iterator==='status') {
        console.log('status');
        delete obj['iterator'];
    }
}
console.log(obj);