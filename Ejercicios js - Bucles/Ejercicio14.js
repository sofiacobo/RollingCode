// Realiza un script que pida una cadena de texto y lo muestre poniendo el signo
// – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué
// tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.
let cadena = prompt("Ingrese una cadena de texto: ");
for(i=0;i<=(cadena.length-1);i++){
    if(i==cadena.length-1){
        document.write(cadena[i]);
    }else{
        document.write(cadena[i]+"-");
    }
}