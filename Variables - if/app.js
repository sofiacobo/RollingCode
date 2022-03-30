//Ejercicio 1
// alert("Un mensaje");

// //Ejercicio 2
// document.write("Hello world");

// //Ejercicio 3
// document.write(3+5);

// //Ejercicio 4
// let nombre = prompt("Escriba un nombre") 
// document.write("Hola "+nombre);

// //Ejercicio 5
// let number1 = prompt("Escriba un número: ");
// let number2 = prompt("Escriba otro número: ");
// document.write(parseInt(number1) + parseInt(number2));

// //Ejercicio 6 y 7 (parecido)
// let number1 = prompt("Escriba un número: ");
// let number2 = prompt("Escriba otro número: ");
// if(number1>number2){
//     document.write("El número mayor es "+number1);
// }
// else{
//     document.write("El número mayor es "+number2);
// }

// //Ejercicio 8
// let number = prompt("Escriba un número: ");
// if(number%2==0){
//     document.write("El número es divisible por 2");
// }
// else{
//     document.write("El número no es divisible por 2");
// }

//Ejercicio 9
 let frase = prompt("Ingrese una frase");
 let vocales = "aeiou";
 let i = 0; 
 let j = 0;
 let contaVocal = 0;

 frase = frase.toLowerCase();
 do {
//     if(frase.charAt(i) == "a" || frase.charAt(i) == "e" || frase.charAt(i) == "i" || frase.charAt(i) == "o" || frase.charAt(i) == "u"){
//         contaVocal ++
//         console.log(frase.charAt(i))
//     }; 
    console.log(frase[i]);
    do {
        if (frase.substr(i,1) == vocales.substr(j,1)) {
            contaVocal++;
            console.log(`SI coincide con ${vocales.substr(j,1)}`);
        }
        else console.log(`No coincide con ${vocales[j]}`)
        j++;
    } while (vocales.length > j);
        j = 0;
        i++;
 } while (frase.length > i);
 document.write(`La cantidad de vocales es: ${contaVocal}`);


// Ejercicio 10
// let number = prompt("Escriba un número: ");
// if(number%2==0 || number%3==0 || number%5==0 || number%7==0){
//     console.log('El número es divisible por 2, 3, 5 o 7');
// }
// else{
//     console.error('El número no es divisle por 2, 3, 5 o 7');
// }