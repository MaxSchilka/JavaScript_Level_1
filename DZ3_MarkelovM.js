"use strict";
                    ////ЗАДАНИЕ 1////ВЫПОЛНЕНО. ВАРИАНТ 7 - ПРАВИЛЬНЫЙ!!!

////Дан массив
let a = [
 [{name: 'Mary', age: 23}, {name: 'Mike', age: 45}, {name: 'Nick', age: 11}],
 [{name: 'Adam', age: 56}, {name: 'Sara', age: 21}, {name: 'Don', age: 22}],
 [{name: 'Karl', age: 34}, {name: 'Marta', age: 76}, {name: 'John', age: 19}]
];

////Скопируйте	его	в	переменную	b	и	выведите	в	консоль.
                    
                    /////ВАРИАНТ 1 - неверный/////
/*
//let b = ObjectAssign([], a);
*/
                    /////ВАРИАНТ 2 - неверный/////
/*
let b = [];//зависимость остаётся
for (let name=0; name<a.length; name++) {
        b[name] = [];
        for(let age=0; age<a.length; age++) {
            b[name][age] = a[name][age];
        }
}
*/
                    /////ВАРИАНТ 3 - неверный/////
/*
let b = [];
for (let name=0; name<a.length; name++) b[name] = a[name]; 
for (let age=0; age<a.length; age++) b[age] = a[age];//зависимость остаётся 
*/
                    /////ВАРИАНТ 4 - неверный/////
/*
let b = a.concat([]);//зависимость остаётся
*/
                    /////ВАРИАНТ 5 - неверный/////
/*
let b = [];//зависимость остаётся
for (let key in a) {
    b[key] = a[key];
}
*/
                    /////ВАРИАНТ 6 - неверный/////
/*
let b = [...a];//зависимость остаётся
*/
                    /////ВАРИАНТ 7 - ПРАВИЛЬНЫЙ/////
/*
function createClone(a) {
    let b = []; // создаём пустой массив
    for (let prop in a) { //перебираем все свойства массива "а"
        if (a.hasOwnProperty(prop)) { //только собственные свойства
            if ("object" === typeof a[prop]) //если свойство также объект 
                b[prop] = createClone(a[prop]); //то делаем клон свойства
            else
                b[prop] = a[prop]; //иначе просто копируем значение
        }
    }
    return b;
}
const b = createClone(a);
*/

                     /////ВАРИАНТ 8 - ПРАВИЛЬНЫЙ/////
/*
let b =[];
for (let i = 0; i<a.length; i++) {
    b[i] = [];
    for(let j = 0; j<a[i].length; j++){
        b[i][j] = Object.assign({}, a[i][j]);
    }
}
*/

                    /////ВАРИАНТ 9 - ПРАВИЛЬНЫЙ/////

let b =[];
a.forEach (function (item, index){
    b[index] = [];
    item.forEach (function (i, ind){
        b[index][ind] = Object.assign({}, i);
    })
});


//ДАЛЬШЕ ТЕСТ НА ЗАВИСИМОСТЬ
a[0][0].name = "Jimmy";
a[0][0].age = 105;
b[0][1].name = "Billy";
b[0][1].age = 350;


console.log(a);
console.log(b);

/*
