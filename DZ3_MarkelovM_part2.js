"use stict"
                    ////ЗАДАНИЕ 2////КОРЗИНА
/*
////Предположим, есть сущность корзины. Нужно реализовать функционал
подсчета стоимости корзины в зависимости от находящихся в ней товаров.
Товары в корзине хранятся в массиве. Задачи:
a. Организовать такой массив для хранения товаров в корзине;
b. Организовать функцию countBasketPrice, которая будет считать
стоимость корзины////
*/


let headphones = [
 {name: 'Philips', model: 1, price: 200}, {name: 'Philips', model: 2, price: 300}, {name: 'Philips', model: 3, price: 400},
 {name: 'SONY', model: 1, price: 275}, {name: 'SONY', model: 2, price: 375}, {name: 'SONY', model: 3, price: 475},
 {name: 'Sehnheiser', model: 1, price: 325}, {name: 'Sehnheiser', model: 2, price: 425}, {name: 'Sehnheiser', model: 3, price: 525}
];

console.log(headphones);

function countBasketPrice(prodlist) {
    let totalPrice = 0;
    prodlist.forEach (function (item) {
        totalPrice += item.price;
    });
    return totalPrice;
}
console.log(countBasketPrice(headphones));

/*//ПИРАМИДКА
for(let i = 0; i<10; console.log(++i)){}
let s = "";
for (let i=0; i<20; i++){
    s += "x";
    console.log(s);
}
*/