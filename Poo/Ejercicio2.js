// 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// ● Una propiedad titular con el valor "Alex".
// ● Una propiedad saldo, teniendo como valor inicial 0.
// ● Un método ingresar() que permita añadir dinero a la cuenta, pasando la
// cantidad como parámetro
// ● Un método extraer() que permita retirar la cantidad pasada como
// parámetro.
// ● Un método informar() que retorne la información del estado de la cuenta.
// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a
// mostrar la descripción del estado de la cuenta.

class Cuenta{
    constructor(titular,saldo){
        this.titular = titular;
        this.saldo = saldo;
    }
    
    ingresar(){
        let moneyMount = prompt("Indique la cantidad de dinero que quiere ingresar: ")
        this.saldo = this.saldo + moneyMount;
    }

    extraer(){
        let lessMoney = prompt("Indique la cantidad de dinero que quiere extraer: ")
        this.saldo = this.saldo - lessMoney;
    }

    informar(){
        console.log(`La cuenta a nombre de ${this.titular} tiene un saldo de $${this.saldo}`);
    }
}

let cuenta1 = new Cuenta("Alex",0);
cuenta1.informar();
cuenta1.ingresar();
cuenta1.extraer();
cuenta1.informar();

