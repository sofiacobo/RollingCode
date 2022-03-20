// Haz un script que escriba una pirámide inversa de los números del 1 al número
// que indique el usuario (no mayor de 50) de la siguiente forma : (suponiendo que
// indica 30).
// 303030303030303030303030303030303030303030303030303030303030
// 2929292929292929292929292929292929292929292929292929292929
// 28282828282828282828282828282828282828282828282828282828
// …..
// 333
// 22
// 1

let number = prompt("Escriba un numero no mayor a 50: ");
for(let i=number;i>0;i--){
    if(number>50){
        console.error("Ingrese un número válido");
    }
    else{
        for(let j=1;j<=i;j++){
            document.write(i);
        }
        document.write("<br>");
    }
}