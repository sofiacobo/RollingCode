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
//Ejercicio 1
const parImpar = (number)=>{
    let result="";
    if(number%2==0){
        result = `El número ${number} es par`;
    }else{
        result = `El número ${number} es impar`;
    }
    return result;
}

let inputNumber = document.querySelector("#nro-odd-even"); //traemos con querySelector del DOM donde el user ingresa el nro
let captionResult = document.querySelector("#fex1 #result"); //traemos el p del DOM

// captionResult.innerText = "Este es el resultado";

inputNumber.addEventListener("keypress", (e) =>{ //e es el elemento que esta desencadenando el evento
    if(e.key && e.target.validity.valid){  //e.key=='Enter'
        let userInput = Number(inputNumber.value);
        let result = parImpar(userInput);
        captionResult.innerText = result;
    }else{
        captionResult.innerText = `${inputNumber.value} no es una entrada válida`;
    }
})

//Ejercicio 2
const infoString = (cadena)=>{
    let result;
    if(cadena == cadena.toUpperCase()) {
      return result = `La cadena "${cadena}" está formada solo por mayúsculas`;
    }
    else if(cadena == cadena.toLowerCase()) {
      return result = `La cadena "${cadena}" está formada solo por minúsculas`;
    }
    else {
      return result = `La cadena "${cadena}" está formada por minúsculas y mayúsculas`;
    }
  }

let textStringHTML = document.getElementById('textString');
let resultTextHTML = document.getElementById('resultText');

textStringHTML.addEventListener("keypress", (e)=>{
    if(e.key && e.target.validity.valid){
        let userInput = textStringHTML.value;
        let result = infoString(userInput);
        resultTextHTML.innerHTML = result;
        console.log(e)
    }
})

//Ejercicio 3
const perimetro = (alto,ancho)=>{
    let perimetro = 2*(Number(alto) + Number(ancho));
    let result = `El perimetro del rectangulo es ${perimetro}`;
    return result;
}

let anchoHTML = document.getElementById('ancho-rec');
let altoHTML = document.getElementById('alto-rec');
let btnCalculate = document.getElementById('calculate');
let resultHTML = document.getElementById('resultCalculate');

btnCalculate.addEventListener("click", ()=>{
    let userInput = anchoHTML.value;
    let userInput1 = altoHTML.value;
    let result = perimetro(userInput,userInput1);
    resultHTML.innerText = result;
})
