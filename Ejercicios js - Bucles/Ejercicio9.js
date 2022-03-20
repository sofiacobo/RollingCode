// Crea un script que escriba los números del 1 al 500, que indique cuáles son
// múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por
// ejemplo :
// 1
// 2
// 3
// 4 (Múltiplo de 4)
// 5-
// ————————————————————-
// 6
// 7
// 8 (Múltiplo de 4)
// 9 (Múltiplo de 9)
// 10

for(i=1;i<=500;i++){
    for(j=i;j<=i;j++){
        if(j%4==0){
            document.write(`${j} - Es un múltiplo de 4`);
        }
        else if(j%9==0){
            document.write(`${j} - Es un múltiplo de 9`);
        }
        else{
            document.write(j);
        } 
    }
    document.write("<br>"); 
}

//FALTA LA LINEA CADA 5 NUMEROS