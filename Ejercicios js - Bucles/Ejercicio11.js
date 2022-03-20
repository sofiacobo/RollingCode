// Realiza un script que pida por teclado 3 edades y 3 nombres e indique el
// nombre del mayor

let name1 = prompt("Ingrese el nombre de una persona: ");
let age1 = prompt("Ingrese la edad de "+name1);
let name2 = prompt("Ingrese el nombre de una persona: ");
let age2 = prompt("Ingrese la edad de "+name2);
let name3 = prompt("Ingrese el nombre de una persona: ");
let age3 = prompt("Ingrese la edad de "+name3);

let maxNumber = Math.max(age1,age2,age3);
if(maxNumber==age1){
    console.log(`La persona mayor es ${name1} y tiene ${age1} años`);
}
else if(maxNumber==age2){
    console.log(`La persona mayor es ${name2} y tiene ${age2} años`);
}
else{
    console.log(`La persona mayor es ${name3} y tiene ${age3} años`);
}
