"use strict"

                    ////ЗАДАНИЕ 2////
/*
Продолжить	работу	с	интернет-магазином,	а	именно,	перенести	функционал	
подсчета	корзины	на	объектно-ориентированную	базу:
• создать	объект	Basket	с	полем	goodList	и	методами	countTotalPrice,
countTotalNumber и	putProduct (методы	должны	считать	общую	стоимость	того,	
что	в	goodList, общее	количество	того,	что	в	goodList и	добавлять	товар	в	
корзину)
• создать	массив	товаров	с	полями	name	и	price
• после	этого	пройтись	по	нему	в	цикле	и	положить	в	корзину	по	одному	
товару	на	четной	позиции	и	по	2	товара	на	нечетной	позиции
• внутри	корзины в	массиве	goodList у каждого	товара	должно	быть	поле	
count – количество	товаров	этого	вида	в	корзине	(например,	5	красных	шаров)
• вывести	общую	стоимость	корзины	и	общее	количество	товаров	в	корзине
*/


let headphones = [
 {name: 'Philips', model: 1, price: 200}, {name: 'Philips', model: 2, price: 300}, {name: 'Philips', model: 3, price: 400},
 {name: 'SONY', model: 1, price: 275}, {name: 'SONY', model: 2, price: 375}, {name: 'SONY', model: 3, price: 475},
 {name: 'Sehnheiser', model: 1, price: 325}, {name: 'Sehnheiser', model: 2, price: 425}, {name: 'Sehnheiser', model: 3, price: 525}
];

console.log(headphones);

function countBasketPrice(basketSum) {
    let totalPrice = 0;
    basketSum.forEach (function (item) {
        totalPrice += item.price;
    });
    return totalPrice;
}
console.log(countBasketPrice(headphones));

let basket = {
    goodlist:
    
}
