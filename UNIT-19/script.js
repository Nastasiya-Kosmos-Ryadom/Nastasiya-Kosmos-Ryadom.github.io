function func(a=b,b=a) {
    let result = a * b;
    return result;
}
console.log(func(3,5));
/*вторую часть задания 1 как еще можно прописать?*/

let number = [1, 2, 3, 4, 5, 6, 7];
console.log(number);
number.pop();
console.log(number);
console.log(number.pop())/*то же самое, но вернуло нам значение удаленного элемента, показало*/
console.log(number);
let deletedValue = number.pop(); /*сохранили в переменную удаленный возвращенный элемент*/
console.log(deletedValue)
console.log(number);

number.shift()
console.log(number);

let indexValue = number.push(29);
console.log(indexValue);/*возвращается индекс добавленного элемента */
console.log(number);

let indexValue1 = number.unshift(77);
console.log(indexValue1);/*возвращается индекс добавленного элемента */
console.log(number);

/*удаление и добавление конкретных эллементов массива */
number.splice(1, 2, 55);/* (индекс с которого начинается действие, сколько элементов удаляем(можно ставить 0, тогда не удалится ничего и просто добавятся элементы), что ставим на их место(можно ничего не добавлять)) */
console.log(number);

/*Объединение массивов */
console.log(number.concat(['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье']));

/*Объединение массивов */
let newArre = [11, 22, 33, 44, 55, 66, 77];
console.log(number.concat(newArre));

/*Получить подмассив (при этом последний индекс не будет выведен)*/
console.log(newArre.slice(0,5))

/*возведение в квадрат каждого элемента массива */
newArre.forEach(function(item) {
    console.log('item*item', item*item)
})

/*перевернуть массив */
console.log(newArre.reverse());

/*возврат результирующей функции */
let Day = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
let firstDay = Day.map(function(item, index, array){
    return 'first ' + item;
})
console.log(firstDay);

/*метод фильтр */
let filter = Day.filter(function (item, index, array){
    return item !== 'воскресенье';
});
console.log(filter);