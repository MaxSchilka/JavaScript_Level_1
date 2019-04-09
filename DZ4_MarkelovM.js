"use strict"
                    ////УПРАЖНЕНИЕ 1////

//число до 999 нужно разделить на три цифры и обозначить их порядки
let value = parseInt(Math.random() *2000);
console.log(value);
//let value = prompt('Введите от 0 до 999');
let valueArray=[];
let splitArray={};
let i;      
    
if (value>999) {
    console.log("ERROR");
    } else {
        i=0;
        while (i<3) {
            valueArray[i]=(value%10);
            value=(value-value%10)/10;
            i++;
        }
        splitArray["Единицы"]=valueArray[0];
        splitArray["Десятки"]=valueArray[1];
        splitArray["Сотни"]=valueArray[2];
      }
console.log(splitArray);



