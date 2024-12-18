'use strict';

/* let Neptunliklar = ['Samir', 'Abdulvoris', 'Behruz', 'Roziya', 'Durdona',]

let son = Neptunliklar.length

let son2 = son - 1

console.log(Neptunliklar[son2]) */

let sinfda = ['samir', 'abdulvoris', 'behruz', 'roziya', 'durdona', "yana kim bo'lishi kerak?"]

let kim = prompt("kim kerak").trim().toLowerCase();

let bormi = sinfda.includes(kim)



if (bormi) {
    console.log('Ha bor');
    alert('Ha bor')
    sinfda.pop()
    sinfda.push("Hamma bor!")
} else {
    console.log("yo'q ular yo'q");
    alert("yo'q ular yo'q")
}


console.log(kim)

console.log(sinfda);
