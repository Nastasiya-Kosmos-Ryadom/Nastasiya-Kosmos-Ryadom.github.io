console.log(document);

/*выводим элемент по id */
let tuit = document.getElementById('may');
console.log(tuit);

/*выводим элементы по классу (коллекция-HTML) */
let Z = document.getElementsByClassName('report__week');
console.log(Z);
/*преобразуем html-коллекцию в массив и помещаем его в переменную */
let zArray = Array.from(Z);
console.log(zArray);
/*выводим полученный массив через цикл */
for(const iterator of zArray){
    console.log(iterator);
}

/*выводим элементы по тегу (коллекция-HTML) */
let P = document.getElementsByTagName('p');
console.log(P);
/*преобразуем html-коллекцию в массив и помещаем его в переменную */
let pArray = Array.from(P);
console.log(pArray);
/*выводим полученный массив через цикл */
for(const iterator of pArray){
    console.log(iterator);
}