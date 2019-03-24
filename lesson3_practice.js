
                        ////ЦИКЛЫ/////
/*//цикл WHILE
let a = 0;

while(a<5) {
    a++;
    console.log(a);
}
console.log(a);
*/
/*// цикл do while
let a=0;
let b=5;
do {
    b--;
    console.log(b);
} while(b>5);
console.log(b);
*/
/*
let a=0;
do {
    a++;
    console.log(a);
} while(a<5);
console.log(a);
*/
/*
////ЦИКЛ FOR
///СЧЁТЧИК №1 одна переменная
for (let i = 0; i<5; i++) { //инкремент постфикс  i=i+1
    console.log(i);
}
///СЧЁТЧИК №2 две переменные
for (let i = 0, j=2; i<5; i++, j+=2) { //инкремент постфикс  i=i+1, j=j+2
    console.log(i*j);
}
////ЦИКЛ FOR
///СЧЁТЧИК №3 выводит все чётные числа в заданном диапазоне
for (let i = 0; i<5; i+=2) { //i=i+2
    console.log(i);
}
////ЦИКЛ FOR
///СЧЁТЧИК №4 выводит все нечётные числа в заданном диапазоне
for (let i = 1; i<5; i+=2) { //i=i+2
    console.log(i);
}
////БЕСКОНЕЧНЫЙ ЦИКЛ WHILE на примере счётчика
let c = 0;

while (true) {
    c++;
    if(c === 3) {
        break;
    }
}
////БЕСКОНЕЧНЫЙ ЦИКЛ FOR на примере счётчика
let d = 0;

for (;;) {
    d++;
    if(d === 3) {
        break;
    }
}
////CONTINUE здесь выводятся все нечётные числа
let q=0;
for (let i=0; i<10; i++) {
    if (i % 2 === 0) {
        continue;    
    }
    console.log(i);
}
*/

                        /////МАССИВЫ////
/*
///ПРОСТОЙ МАССИВ
let array = [1, 2, 3, 4, 5,];//ЦИФРОВОЙ МАССИВ
let stringArray = ["aaer", "gweg", "waesfasd"];//СТРОКОВЫЙ МАССИВ
let boolArray = [true, true, false, false]; //БУЛЕВЫЙ МАССИВ
console.log(array);
console.log(stringArray);
console.log(boolArray);

///Вывод значений из массива
console.log(stringArray[1]);//выводит второй элемент из строкового массива
*/

////ДВУМЕРНЫЙ МАССИВ
/*
let boolArray = [true, true, false, false, 222, "sedsg"]; //СМЕШАННЫЙ МАССИВ
console.log(boolArray);
*/

////ДИНАМИЧЕСКАЯ ГЕНЕРАЦИЯ МАССИВОВ
/*
let a = [];

a[0] = 3;
a[1] = 5;

a[10] = 6;
console.log(a);
console.log(a[5]);//непроставленные элементы выводятся как UNDEFINED
*/

////АССОЦИАТИВНЫЙ МАССИВ
/*
let user = {
    name: "Vasya",
    age: 23,
    birth: "12.12.1990"
};
console.log(user.name);
*/

////МНОГОМЕРНЫЙ МАССИВ
/*
let map =[
    ["00", "01", "02", "03", "04"],
    ["10", "01", "02", "03", "04"],
    ["20", "01", "02", "03", "04"],
    ["30", "01", "02", "03", "04"],
    ["40", "01", "02", "03", "04"],
    
];
console.log(map);//выводит массив полностью
consloe.log(map[0][1]);//выводит второе значение из первого элемента массива
*/

////МНОГОМЕРНЫЕ АССОЦИАТИВНЫЕ МАССИВЫ
/*
let computer = {
    name: "Macbook",
    year: 2015,
    colors: ["white", "black", "silver", "yellow"];
    memory: {
        DDR3: 8,
        SSD: 256,
    }
};

let table = [
    {name: "Vasya", age: 23, birth: "12.12.1990"},
    {name: "Sasha", age: 45, birth: "12.12.1990"},
    {name: "Masha", age: 25, birth: "12.12.1990"},
];
*/
////СВЯЗКА ЦИКЛОВ И МАССИВОВ с FOR
/*
let names = ["Sara", "Mary", "Mike"];//объявляем массив имён
console.log(names.length);//через консоль нужно посмотреть length массива
for (let i = 0; i < names.length; i++) {//такая запись гарантирует вывод всех имён в массиве
    console.log(names[i]);
};
*/

////СВЯЗКА ЦИКЛОВ И МАССИВОВ с FjrEACH
/*
let names = ["Sara", "Mary", "Mike"];//объявляем массив имён
console.log(names.length);//через консоль нужно посмотреть length массива

names.forEach(function(item, index) {
    console.log(item);//выводит название значения
    console.log(index);//выводит индекс значения
    console.log(array);//выводит весь массив
});
*/

////СВЯЗКА ЦИКЛОВ И МАССИВОВ с ToSTRING
/*
let names = ["Sara", "Mary", "Mike"];//объявляем массив имён
console.log(names.length);//через консоль нужно посмотреть length массива

let a = names.toString();//возвращаем строчку через переменную
console.log(a);//Sara,Mary,Mike//склеивает все элементы массива
*/

////КАК ДЛЯ ДВУМЕРНОГО МАССИВА ИСПОЛЬЗОВАТЬ ForEACH
/*
let a = [];//изначально пустой массив без всего

for(let i=0; i<5; i++) {//внешний цикл
    a[i] = [];//создаём нулевой элемент во внешнем цикле, т.к. i=0 и кладём туда ещё пустой массив, т.к. к нему нужно будет обращаться. Если так не сделать, то будет говорить что идёт обращение к тому, чего нет.
    for(let j=0; j<5; j++) {//внутренний цикл
        a[i][j] = 1;//во внутреннем цикле работаем с массивом созданным выше и для каждой его ячейки записывается 1 размером до 5.
    }
}

console.log(a);

a.forEach(function(item) {
    item.forEach(function(i) {
        console.log(i)
    })
    
});

console.log(a[0].toString());
*/

////МЕТОДЫ POP и PUSH
/*
let story = ["шла", "Саша", "по", "шоссе"];//массив с элементами

console.log(story.pop());//убирает последний элемент массива
console.log(story);//вывод массива уже без последнего элемента

console.log(story.push("дороге"));//добавляет длину массива вместе с последним элементом к нему
console.log(story);//вывод массива с уже новым добавленным в конце элементом
*/
////МЕТОДЫ SHIFT и UNSHIFT
/*
let story = ["шла", "Саша", "по", "шоссе"];//массив с элементами

console.log(story.unshift());//убирает первый элемент массива
console.log(story);//вывод массива уже без первого элемента

console.log(story.shift("дороге"));//добавляет длину массива вместе с первым элементом к нему
console.log(story);//вывод массива с уже новым добавленным в начале элементом
*/
////МЕТОДЫ FILTER FIND и INCLUDES
/*
let prices = [200, 120, 399, 400, 455, 670];//
let clients = ["Валерий", "Мария", "Татьяна", "Виктор", "Вероника"];//

let vLetterClients = clients.filter(function(element){ //ищет имена, которые начинаются с буквы "В" и создаёт из этих имён новый массив
    return element.charAt(0) === "В";
});

let aLetterEndClients = clients.find(function(element){ //ищет имена, которые заканчиваются на букву "а" и создаёт из этих имён новый массив
    return element.endsWith("а");
});

let isPrice400 = prices.includes(400); //ищет указанный параметр, т.е. 400
*/
////КОПИРОВАНИЕ ОБЪЕКТА
/*
let a = {name: "qw", age: 12};
let b;

b = Object.assign({}, a); //b принимает параметры a и становится независимым от а, т.е. дальнейшие изменения параметров не повлияют на параметры дочернего или родительского массивов
a.name = "1234";

console.log(a);
console.log(b);
*/
                        ////ИГРА БЫКИ И КОРОВЫ/////
/*
function getRandomNumberAsArray() { //3. Создаём функцию для генерации неповторяющихся чисел и добавдения их в массив
    let generated = String(Math.random() * 100000000000000000); //рэндомное число с приведением к целому числу с последующим превращением его в строчку. поэтому на выходе в "generated" получится строчка из последовательности цифр. 
    let result = []; //создание массива для неповторяющихся цифр
    for (value of generated) { //проходим по каждому элементу нашей строки
        if (!result.includes(value)) { //если в массиве уже присутствует значение "value", то ничего не делается. Если не присутствует, то в массив кладётся эта цифра
            result.push(value);
        }
        if (result.length == 4) { //как только в массиве набирается четыре цифры, то происходит строка ниже, т.е. "return"
            return result;
        }
    }
}

function startGame() { //1. Создаём функцию, т.е. рамки игры
    let number = getRandomNumberAsArray();//передаётся функция
    while(true) {//задаётся цикл
        let answer = prompt ("Угадайте 4-х значное число").split("");// загадывается загадка у пользователя, где пользователь каждый раз будет вводить 4-х значное число. После этого превращаем это число в массив методом "split", который разделяет строку по определённому сепаратору. После этого ввод будет распознавать каждую из введённых цифр отдельно от другой.
        let bulls = getBullsCount (number, answer); //количесво угаданных быков
        let cows = getCowsCount (number, answer) - bulls; //количество угаданных коров
        console.log(
            `Ваш ответ: ${answer},  быков: ${bulls},  коров: ${cows}\n`
        );
        
        if(number.toString() === answer.toString()) {
            console.log("Вы победили!");
            break;
        }
        
    }
    console.log (number);
}

function getBullsCount(number, answer){
    let count = 0; //заводится счётчик, который равен нулю. После этого он будет пробегаться по рандомному числу и последовательно сравнивать его с введённым
    for (let i=0; i < number.length; i++){
        if (number[i] == answer[i]) {
            count++; //когда находит одинаковую цифру, то выполняется данная команда
        }
    }
    return count;
}
function getCowsCount(number, answer){ //здесь будут учитываться все совпадения цифр в принципе
    let count = 0;
    for (value of number){
        if (answer.includes(value)) {
            count++;
        }
    }
    return count;
}

startGame(); //2.
*/



