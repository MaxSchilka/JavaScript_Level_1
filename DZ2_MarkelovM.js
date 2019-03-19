"use strict";
//Задание 1
/*
    // Пример 1
    
    let a=1, b=1, c, d;
    c= ++a;
    alert(c+"\nЗадание 1 пример 1\nЗдесь с= a+1 =2, а становится равно 2, т.к. префиксная форма");
    
    // Пример 2
     
    d = b++;
    alert(d+"\nЗадание 1 пример 1\nЗдесь d= b =1, а b стало равно 2, т.к. постфиксная форма");
    

    // Пример 3
    
    c = (2+ ++a);
    alert(c+"\nЗадание 1 пример 1\nЗдесь c=2+3=5, т.к. а стало 3 через префиксную форму ");

    // Пример 4

    d = (2+ b++);
    alert(d+"\nЗадание 1 пример 1\nЗдесь d=2+2, т.к. b обрабатывается через постфиксную форму и сохраняет своё старое значение для вычисления d и далее принимает новое значение которое равно 3");

    alert(a+"\nЗдесь a=3, т.к. ранее в третьем примере приняло значение 3");
    alert(b+"\nЗдесь a=3, т.к. ранее в четвёртом примере приняло значение 3");



//Задание 2
    /*
    let a = 2;
    let x = 1 + (a *= 2);
    */
    /*
    alert("Задание 2\nответ x=1+(2x2)=5, но также выводится undefined");
    */
//Задание 3

 /*       
    let a = ((Math.random() < 0.5) ? -1 : 1)*parseInt(Math.random() *100);
    let b = ((Math.random() < 0.5) ? -1 : 1)*parseInt(Math.random() *100);
    alert("a="+a+"\nb="+b);
    function ab(a, b){
        console.log (a, b);
        if (a >= 0 && b >= 0){
            alert(a-b+"\nСлучайные числа положительные. Поэтому выведенное число результат их разности");    
        }else{
            if(a < 0 && b < 0){
                alert(a*b+"\nСлучайные числа отрицательные. Поэтому выведенное число результат их произведения"); 
            }else{
                alert(a+b+"\nСлучайные числа разных знаков. Поэтому выведенное число результат их суммы"); 
            }
        }
    }
    
    alert(ab(a,b);

*/

//Задание 4
/*
let a = prompt( 'Введите число a' ),
let b = prompt( 'Введите число b' ),

function plus ( a, b ) { //Сложение 
    return a + b;
}
function minus ( a, b ) { //Вычитание
    return a - b;
}
function del ( a, b ) {//Деление
    if(b==0){
        return -1;
    }
    return a / b;
}
function multi ( a, b ) { //Умножение
    return a * b;
}


//Задание 5

function mathOperation ( arg1, arg2, operation ) { 
    switch (operation) { 
        case '+': 
            return plus ( arg1, arg2 ); 
        case '-': 
            return minus ( arg1, arg2 ); 
        case '/': 
            return del ( arg1, arg2 ); 
        case '*': 
            return multi ( arg1, arg2 ); 
    } 
} 
*/

//Задание 6
/*
let val = parseInt(prompt("Придумайте любое число"));
let pow = parseInt(prompt("В какую степень выхотели бы возвести Ваше число?"));
alert(val+" -Ваше число \n"+pow+" -Степень Вашего числа");
function power (val, pow) {
    console.log (val, pow);
    if (pow > 1) {
        return val * power(val, pow-1);
    } else if (pow == 1) {
        return val;
    } else if (pow == 0) {
        return 1;
    } else {
        return 1 / power (val, pow * -1);
    }
    
}
alert(power(val, pow));
*/

//Задание 7 Проверка пароля
/*
let path = prompt ("Введите пароль");
function suitTheLength (path) {
    return (path.length >= 3 && path.length <= 12);
}

function suitTheSymbol (path) {
    return (path.includes ("&") || path.includes("$") || path.includes("%") ||);
}
function suitBeginningAndEnd(path){
    return (path.startsWith("q") || path.endsWith ("z"));
    };
function checkPassword(path) {
    if (suitTheLegend (path) && suitTheSymbol (path) && suitBeginningAndEnd(path)) {
        alert ("Пароль корректный");
    }else{
        alert ("Пароль некорректный");
    }
    
}
checkPassword(path);
*/