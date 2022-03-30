// Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la
// función Math.random para obtener números aleatorios entre 1 y 6 para cada uno
// de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y
// anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces
// esta operación.

function dados (){
    let dado1, dado2, result;
    // let cant2=0, cant3=0, cant4=0, cant5=0, cant6=0, cant7=0, cant8=0, cant9=0, cant10=0, cant11=0, cant12=0;
    let frecuencia =[];
    for (let i=1; i<=50; i++) {
        dado1 = Math.round(Math.random() * 6); // Entre 1 y 6
        dado2 = Math.round(Math.random() * 6); // Entre 1 y 6
        result = dado1+dado2;
        frecuencia.push(result);
    }

    console.log(frecuencia);
    // console.log("Frecuencia de los resultados:");
    // for (let i=0; i<frecuencia.length ; i++) {
    //     console.log(frecuencia[i]);
    //     if(frecuencia[i]==2){
    //         cant2++;
    //     }
    //     else if(frecuencia[i]==3){
    //         cant3++;
    //     }
    //     else if(frecuencia[i]==4){
    //         cant4++;
    //     }
    //     else if(frecuencia[i]==5){
    //         cant5++;
    //     }
    //     else if(frecuencia[i]==6){
    //         cant6++;
    //     }
    //     else if(frecuencia[i]==7){
    //         cant7++;
    //     }
    //     else if(frecuencia[i]==8){
    //         cant8++;
    //     }
    //     else if(frecuencia[i]==9){
    //         cant9++;
    //     }
    //     else if(frecuencia[i]==10){
    //         cant10++;
    //     }
    //     else if(frecuencia[i]==11){
    //         cant11++;
    //     }
    //     else if(frecuencia[i]==12){
    //         cant12++;
    //     }
    // }
    // console.log(`El número 2 salió ${cant2} veces`);
    // console.log(`El número 3 salió ${cant3} veces`);
    // console.log(`El número 4 salió ${cant4} veces`);
    // console.log(`El número 5 salió ${cant5} veces`);
    // console.log(`El número 6 salió ${cant6} veces`);
    // console.log(`El número 7 salió ${cant7} veces`);
    // console.log(`El número 8 salió ${cant8} veces`);
    // console.log(`El número 9 salió ${cant9} veces`);
    // console.log(`El número 10 salió ${cant10} veces`);
    // console.log(`El número 11 salió ${cant11} veces`);
    // console.log(`El número 12 salió ${cant12} veces`);
}

dados();