// Crea un objeto llamado auto que tenga algunas características como el color,
// marca, modelo y si está encendido o apagado. Crea los métodos necesarios para
// permitir encender y apagar el auto.

let auto = {
    color: "gris",
    marca: "Fiat",
    modelo: "Uno",
    estado: false
}

function encenderAuto(){
    auto.estado = true;
    console.log(auto);
    console.log("El auto esta encendido");
}

function apagarAuto(){
    auto.estado = false;
    console.log(auto);
    console.log("El auto esta apagado");
}