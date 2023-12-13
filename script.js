// Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:

// ﻿sum(3) = 3 

// sum(5) = 8

// sum(20) = 28

function sumClosures(){
    let result = 0;

    

    return function(number){
        result += number; 
        return result;
    }; 
}


const sum = sumClosures();

console.log(sum(3));
//3
console.log(sum(5));
//8
console.log(sum(20));
//28