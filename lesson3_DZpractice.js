"use strict"
/*
    Предположим, есть сущность корзины. Нужно реализовать функционал
подсчета стоимости корзины в зависимости от находящихся в ней товаров.
Товары в корзине хранятся в массиве. Задачи:
a. Организовать такой массив для хранения товаров в корзине;
b. Организовать функцию countBasketPrice, которая будет считать
стоимость корзины.
*/
let headphones = [
 {name: 'Philips', model: 1, price: 200}, {name: 'Philips', model: 2, price: 300}, {name: 'Philips', model: 3, price: 400},
 {name: 'SONY', model: 1, price: 275}, {name: 'SONY', model: 2, price: 375}, {name: 'SONY', model: 3, price: 475},
 {name: 'Sehnheiser', model: 1, price: 325}, {name: 'Sehnheiser', model: 2, price: 425}, {name: 'Sehnheiser', model: 3, price: 525}
];
console.log(headphones);

function countTotalPrice (headphones){
    let sum = 0;
    headphones.forEach (function (item) {
        sum += item.price;
    });
    return sum;
}
console.log(countTotalPrice(headphones));
    //sum = sum + headphones.price
/*
let sum = 0;
for (headphones.price=0; headphones.price < headphones.length; price++) {
        sum = sum + headphones.price;
    }
alert (sum);
*/

/*
for (let price=0; price < headphones.length; price++) {
    sum += headphones.price; 
    console.log(headphones[price]);
    console.log(sum);
    //sum += sum + headphones.price;
    }
*/
/*
headphones.forEach (function (index) {
    index.forEach (function (price) {
        console.log(price);
        
    })
});
*/

function countBasketPrice(headphones) {
    let sum = 0;
    headphones.forEach (function (item) {
        sum += item.price;
    });
    return sum;
}
console.log(countBasketPrice(headphones));    

