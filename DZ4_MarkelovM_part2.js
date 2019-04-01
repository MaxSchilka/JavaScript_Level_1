"use strict";

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

let basket = {
    goodlist: [],
    countTotalPrice (prodlist){
        let toatlPrice = 0;
        prodlist.forEach (function (item) {
            toatlPrice +=item.price;
        });
        return totalPrice;
    },
    
    countTotalNumber(){
        let sumCount = 0;
        
    },
    
    putProduct (prod, count) {
        
    }
};

for (let i = 0; i < headphones.length; i+=2) { //товары на чётной позиции
    basket.putProduct(headphones[i], count: 1); //складываются один раз
};

for (let i = 1; i < headphones.length; i+=2) { //товары на нечётной позиции
    basket.putProduct(headphones[i], count: 2); //складываются 2 разв
};
basket.countTotalNumber();
basket.countTotalPrice();


/*
let basket = {
    goodlist: [],
    countTotalPrice(){
        let totalPrice = 0;
        for (let i=0; i<this.goodList.length; i++) {
            totalPrice += this.goodList[i].count * this.goodlist[i].price;
        }
        console.log("ИТОГО: " + totalPrice)
    },
    
    countTotalNumber(){
        let sumCount = 0;
        for (let i=0; i<this.goodlist.length; i++) {
            sumCount += this.goodlist[i].count;
        }
        console.log ("Товаров в корзине: " + sumCount);
    },
    
    putProduct (prod, count) {
        let idx = this.goodlist.findIndex(function(elem) {
            return elem.name === headphones.name;
        });
        if (idx === -1) {
            this.goodlist.push(Object.assign({}, prod));
            this.goodlist[this.goodList.length - 1].count = count;
        } else {
            this.goodlist[idx].count += count;
        }
    }
};

for (let i = 0; i < headphones.length; i+=2) { //товары на чётной позиции
    basket.putProduct(headphones[i], count: 1); //складываются один раз
};

for (let i = 1; i < headphones.length; i+=2) { //товары на нечётной позиции
    basket.putProduct(headphones[i], count: 2); //складываются 2 разв
};
basket.countTotalNumber();
basket.countTotalPrice();


/*
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
*/