// Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un
// mensaje que ya puede conducir, si la edad ingresada no es un número válido
// indicarlo en un mensaje.

let age = prompt("Ingrese la edad: ");
if(age>18){
    console.log("Usted tiene permitido conducir");
}
else{
    console.warn("Usted NO puede conducir");
}

