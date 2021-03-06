// Escribir el código de una función a la que se pasa como parámetro un número
// entero y devuelve como resultado una cadena de texto que indica si el número es
// par o impar. Mostrar por pantalla el resultado devuelto por la función.

function numbers() {
    let x = prompt("Ingrese un numero: ");
    if(x%2==0){
        return `El número ${x} es par`;
    }
    else{
        return `El número ${x} es impar`;
    }
}
// numbers();

// Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo,
// luego crear una función para calcular su perímetro y mostrarlo por pantalla.

const perimetro = function (){
    let a = prompt("Ingrese el lado del rectángulo (en cm): ");
    let b = prompt("Ingrese la altura del rectángulo (en cm): ");
    let perimetro = 2*(a+b);
    alert(`El perimetro del rectangulo es ${perimetro}`);
}
// perimetro();

// Escriba un script que muestre la tabla de multiplicar de un número ingresado
// por pantalla, la creación de la tabla debe ser realizada con una función y mostrar
// solo los resultados del 1 al 10 del número elegido por el usuario.

const multiplicar = function(){
    let num = prompt("Ingrese un número: ");
    console.log(`Tabla del ${num}`);
    for(i=1;i<=10;i++){
        console.log(`${i}) ${num*i}`);
    }
}
// multiplicar();

// Definir una función que muestre información sobre una cadena de texto que se
// le pasa como argumento. A partir de la cadena que se le pasa, la función
// determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o
// por una mezcla de ambas.

function infoCadena(cadena) {
    if(cadena == cadena.toUpperCase()) {
      console.log(`La cadena "${cadena}" está formada solo por mayúsculas`);
    }
    else if(cadena == cadena.toLowerCase()) {
      console.log(`La cadena "${cadena}" está formada solo por minúsculas`);
    }
    else {
      console.log(`La cadena "${cadena}" está formada por minúsculas y mayúsculas`);
    }
  }
  
let cadena1 = prompt("Ingrese una cadena de texto: ");
infoCadena(cadena1);