// Realiza un script que muestre la posición de la primera vocal de un texto
// introducido por teclado

let cadena = prompt("Ingrese un texto: ");
for(i=0;i<=cadena.length;i++){
    if(cadena[i]=='a' || cadena[i]=='e' || cadena[i]=='i' || cadena[i]=='o' || cadena[i]=='u'){
        console.log(`La primera vocal del texto está en la posición ${i}`);
    }
}