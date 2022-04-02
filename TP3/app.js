//Ejercicio 1

let listMonths = document.querySelector("#ex1 .list")

const months = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

for (let i=0; i<months.length; i++) {
    listMonths.innerHTML += `<li>${months[i]}</li>`; 
}

//Ejercicio 3
let listDices = document.querySelector("#ex3 .list")

let dicesValues = [];
let lap=0;
while(lap<50){
    let dice1 = Math.round((Math.random()*6));
    let dice2 = Math.round((Math.random()*6));
    let total = dice1 + dice2; 

    dicesValues.push({
        dice1: dice1,
        dice2: dice2,
        sumDices: total
    });
    lap++;
}

//map crea un array nuevo a partir de una acción sobre c/elem de otro array
let listValues = dicesValues.map(({dice1, dice2, sumDices}) =>
      `<li> Dice1: ${dice1} | Dice2: ${dice2} | Total: ${sumDices} </li>`
  );
listDices.innerHTML = listValues.join("");

//Funciones