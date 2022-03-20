// Realiza un script que pida número de filas y columnas y escriba una tabla.
// Dentro de cada una de las celdas deberá escribirse un número consecutivo en
// orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

let num1 = prompt("Ingrese un número de filas: ");
let num2 = prompt("Ingrese un número de columnas: ");
let cantNumbers = num1*num2;

for(i=1;i<=num1;i++){
    for(j=1;j<=num2;j++){
        document.write(cantNumbers);
        cantNumbers--;
    }
    document.write("<br>");
}