"use strict";
//Задание 1 

alert("Задание 1.\nПеревод температуры из Цельсия в Фаренгейты");
let tC = prompt("Введите Температуру по Цeльсию");
tC = Number.parseInt(tC);
alert("Вы ввели "+tC+" градусов по Цельсию");
let tF = (9/5)*tC+32;
alert("Температура по Фаренгейту составляет "+tF);



//Задание 2
alert("Задание 2.\nОбъявляются две переменные: admin и name. Записать в name строку Василий. Скопировать значение из name в admin. Вывести admin (должно вывестись Василий) ");
let admin;
let name = "Василий";
admin=name;
alert(admin);



//Задание 3
alert("Задание 3.\nВывести в консоль значения выражений и объяснить почему получились такие значения используя комментарии к каждому выражению:");
alert(10+10+"10"+"\nТакое значение получилось, т.к. к сумме первых двух чисел прибавляется последнее значение, которое является строчным элементом и выводится как текст, а не как цифры");	
alert(10+"10"+10+"\nТакое значение получилоссь, т.к. среднее значение является строчным элементом и выводится как текст, а не как цифры");	
alert(10+10+ +"10"+"\Такое значение, т.к. строчный элемент имеет унарный плюс, в связи с чем данный элемент преобразуется в число");	
alert(10/-""+"\nТакое значение получилось, т.к. выражение -\"\" даёт результат -0");	
alert(10/+"2,5"+"\nТакое значение получилось, т.к. выражение -\"2,5\" выдаёт строчный элемент");



//Задание 4
alert("Задание 4.\nНапишите, являются ли данные имена переменных корректными:")
alert("let mode = \"normal\"; - корректное имя, т.к. подходит по смыслу и по синтаксису, а также отвечает установленным требованиям");
alert("let my_valu3 = 102; - корректное имя, т.к. подходит по смыслу и по синтаксису, а также отвечает установленным требованиям");	
alert("let 3my_value3 = \"102\"; - некорректное имя, т.к. не отвечает установленным требованиям, т.е. начинается с цифры");	
alert("let  __hello__ = \"world\"; - корректное имя, т.к. отвечает установленным требованиям, т.е. начинается с подчёркивания, что допустимо");	
alert("let $$$ = \"money\"; - корректное имя, т.к. отвечает установленным требованиям, т.е. начинается со знака \"$\", что допустимо");	
alert("let !0_world = true; - некорректное имя, т.к. не отвечает установленным требованиям, т.е. начинается со знака \"!\", что недопустимо");

