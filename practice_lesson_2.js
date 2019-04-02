"use strict"
/*
    Объявить две целочисленные переменные — a и b и задать им произвольные
начальные значения. Затем написать скрипт, который работает по следующему
принципу:
o если a и b положительные, вывести их разность;
o если а и b отрицательные, вывести их произведение;
o если а и b разных знаков, вывести их сумму;
Ноль можно считать положительным числом.
4. Реализовать четыре основные арифметические операции в виде функций с двумя
параметрами. Обязательно использовать оператор return.
*/
/*
let a = ((Math.random() <0.5)? 1: -1) * parseInt(Math.random() * 100);
console.log(a);
let b = ((Math.random() <0.5)? 1: -1) * parseInt(Math.random() * 100);
console.log(b);
/*
if (a>0 && b>0) {
    console.log (a-b);
} else if (a<0 && b<0) {
    console.log (a*b);
} else {
    console.log (a+b);
}
*/


/*
function allMuvs (c, d, muv) {
    switch (muv) {
        case "+":
            return sum (c, d);
        case "-":
            return dif (c, d);
        case "*":
            return multi (c, d);
        case "/":
            return del (c, d);
    }
    
}
*/
let arg1 = ((Math.random() < 0.5)? -1: 1) * parseInt(Math.random()*1000);
console.log(arg1);
let arg2 = ((Math.random() < 0.5)? -1: 1) * parseInt(Math.random()*1000);
console.log(arg2);


let operation = prompt("укажите нужное действие");

function mathOperation (arg1, arg2, operation) {   
    switch (operation) { 
            case "+": 
                return arg1 + arg2;
            case "-": 
                return arg1 - arg2; 
            case "/": 
                return arg1 / arg2; 
            case "*": 
                return arg1 * arg2;                
    }
    
}
alert(mathOperation());
