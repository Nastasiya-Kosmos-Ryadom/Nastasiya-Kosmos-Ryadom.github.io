console.log(document);

console.log(document.body);

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

/*Получение всех дочерних элементов списка по тэгу */
let ulElements = document.querySelector('ul');
console.log(ulElements);
console.log(ulElements.children);
/*Переложили в массив все элементы списка и поместили его в переменную */
let liElementsArr = Array.from(ulElements.children);
console.log(liElementsArr);

/*получение первого и последнего элемента списка (потомка ul) */
console.log(ulElements.firstElementChild);
console.log(ulElements.lastElementChild);

/*получение предыдущего и последующего элемента того же порядка */
console.log(ulElements.previousElementSibling);
console.log(ulElements.nextElementSibling);

/*получение ближайшего родителя closest ??? */
/*console.log(liElementsArr.closest('.flowers'));*/

/*получение конкретного элемента списка по индексу (в переменной уже заключен массив см начало) */
console.log(liElementsArr[3]);

/*изменение содержимого: получить нужный элемент в переменную,  */
let firstLi = liElementsArr[0];
console.log(firstLi);
console.log(firstLi.innerText);/*получили текст, который лежит в первом элементу */
firstLi.innerText = 'althaea'; /*изменили текст первого элемента */
console.log(firstLi.innerText); /*получили новый текст первого элемента */
/*setTimeout(() => firstLi.innerText = 'althaea', 6000) - изменение текста через 6 сек после загрузки страницы*/
let secondLi = liElementsArr[1];
console.log(secondLi.innerText);
secondLi.innerHTML = '<b>chrysanthemums</b>';/*изменили текст и стиль html тега (текст не обязательно менять, тогда прописываем тот же что и был и оборачиваем его в тэг) */
console.log (secondLi.innerHTML);


/*Изменение стиля текста не получилось ??? 

let htmlStyle = `
<ul class="flovers" style="bacground-color: aqua; color: red";>
<li class="flovers__element">chrysanthemums</li>
<li class="flovers__element">chamomile</li>
<li class="flovers__element">cornflowers</li>
<li class="flovers__element">pansies</li>
<li class="flovers__element">calendula</li>
</ul>`; */

/*получить свойство атрибута id (так можно получать свойства любого атрибута или нет???) */
let title = document.querySelector('h1');/*сначала заводим в переменную атрибут */
console.log(title.id);

/*проверить наличие атрибута */
console.log(title.hasAttribute('class'));
/*получить значение атрибута */
console.log(title.getAttribute('class'));
/*установить значение атрибута (так можно например поменять стиль в самом тэге) */
let styleWildflowers = document.querySelector('h2');
styleWildflowers.setAttribute('style', 'color: red; background-color: aqua');
let styleUl = document.querySelector('ul');
styleUl.setAttribute('style', 'color: blue');
/*удаление атрибута */
styleUl.removeAttribute('style');
/*Добавление класса отдельному элементу списка */
let newTitle = newnew;
console.log(newTitle.classList.add('newClass')); /*посмотреть можно в элементс ф12 */

/*не получилось удалить последний элемент списка через массив */
let Y = document.getElementsByClassName('flovers__element');
let yArray = Array.from(Y);
yArray.pop();

liElementsArr.pop()


/* ??? стили - почему не получается вывести слили - когда уже массив созданв переменную или как занести в переменную название класса? */

/*console.log(getComputedStyle(zArray));*/





 