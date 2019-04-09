"use strict"

let headphones = [
 {name: 'Philips', model: 1, price: 200}, {name: 'Philips', model: 2, price: 300}, {name: 'Philips', model: 3, price: 400},
 {name: 'SONY', model: 1, price: 275}, {name: 'SONY', model: 2, price: 375}, {name: 'SONY', model: 3, price: 475},
 {name: 'Sehnheiser', model: 1, price: 325}, {name: 'Sehnheiser', model: 2, price: 425}, {name: 'Sehnheiser', model: 3, price: 525}
];

console.log(headphones);

function sumAll (headphones) {
    let sum = 0;
    headphones.forEach (function (item) {
        sum += item.price
    });
    return sum;
}
console.log(sumAll(headphones)); //до сюда работает


let basket = {
    goodList = {},
    countTotalPrice (goodList) { //Общая стоимость того что в goodlist
        
    },
        
    countTotalNumber (goodList) { //общее колчичество того что в goodlist
        
    },
        
    putProduct (i, count) { //функция для добавления товаров в goodlist
        
    }
        
    
}

for (i = 0; i < headphones.length; i += 2) {
    basket.putProduct (headphones[i], count 1);
};

for (i=1; i<headphones.length; i +=2) {
    basket.putProduct (headphones[i], count:2);
};