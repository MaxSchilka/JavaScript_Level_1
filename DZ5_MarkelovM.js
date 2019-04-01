"use strict"

                    ////ЗАДАНИЕ 1////
/*
Создать	 функцию,	 генерирующую	 шахматную	 доску.	Можно	 использовать	 любые	
html-теги.	Доска	должна	быть	верно	разлинована	на	черные	и	белые	ячейки.	Строки	
должны	нумероваться	числами	от	1	до	8,	столбцы — латинскими	буквами	A,	B,	C,	D,	
E,	F,	G,	H.
*/

function makeBoard(){
    let board = document.querySelector('.board');
    let block;
    let flag = true; // белая/чёрная клетка
    
    for(let i=0; i<8; i++){
        
        for(let j=0; j<8; j++){
            
            if(j==0)
                flag = !flag;   
            
            block = document.createElement('div');
        
            if(flag)
                block.className='block black';
            else
                block.className='block white';
            
            //вывел
            board.appendChild(block);
            
            //с черного на белое
            flag = !flag;
        }
    }
}
 
makeBoard();