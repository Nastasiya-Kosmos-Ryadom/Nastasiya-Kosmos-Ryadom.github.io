alert('подключили js из отдельного файла')
var ColorPrimary = 'blue'
let ColorSecond = 'red'
const ColorColor ='green'
let SomeColor
SomeColor ='aqua'

console.log(ColorSecond)
console.log(ColorColor)
console.log(ColorPrimary)
console.log(SomeColor)

/*простые типы данных*/ 

let NumberVar=55
let strVar='Василий Геннадьевич'
let BooVar=true
let undeVar=undefined
let nullVar=null

console.log(NumberVar)
console.log(strVar)
console.log(BooVar)
console.log(undeVar)
console.log(nullVar)

/*Сложные типы данных*/

let user= {
    name: 'Vasiliy',
    status: {
        admin: true,
        manager: false
}
}

console.log(user)

user.age = 31; /*завели новое значение возраста */

console.log(user)

user['age'] = 35; /*завели новое значение возраста */

console.log(user)

delete user.age; /*удалили значение возраста */

console.log(user)

const пользователь = {
    name: 'Max',
    status: {
        admin: true,
        manager: false
}
}

user.age = 37;

console.log(пользователь)

/*операции над переменными/данными */

let var1 = 3; /* "=" оператор присваивания */
let var2 = 7; /* "=" оператор присваивания */

console.log(var2 % var1) /* "%" оператор взятия остатка от деления */

console.log(var2 == var1) /* "==" оператор сравнения значений, на выходе булево значение в консоли тру или фалс */

const mother = {
    age: 25
}

if (!(user.age > 18)) {
    console.log('совершеннолетний');
} else {
    console.log('не совершеннолетний')
}


