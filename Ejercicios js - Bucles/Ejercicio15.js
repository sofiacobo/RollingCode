// Realiza un script que cuente el número de vocales que tiene un texto.

let cadena = prompt("Ingrese un texto: ");
let cantA = 0, cantE = 0, cantI = 0, cantO = 0, cantU = 0;
for(i=1;i<cadena.length;i++){
    if(cadena[i]=='a'){
        cantA++;
    }
    else if(cadena[i]=='e'){
        cantE++;
    }
    else if(cadena[i]=='i'){
        cantI++;
    }
    else if(cadena[i]=='o'){
        cantO++;
    }
    else if(cadena[i]=='u'){
        cantU++;
    }
}
console.log(cadena);
console.log(`El texto tiene ${cantA} letras 'a', ${cantE} 'e', ${cantI} 'i', ${cantO} 'o' y ${cantU} 'u'`);

