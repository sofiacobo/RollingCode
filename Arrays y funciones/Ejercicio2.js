// Crear un script que solicite al usuario mediante un prompt el nombre de
// ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se
// debe mostrar el arreglo generado, luego realizar las siguientes acciones:
// ● Mostrar la longitud del arreglo.
// ● Mostrar en el documento web los ítems de las posiciones primera, tercera y
// última.
// ● Añade en última posición la ciudad de París.
// ● Escribe por pantalla el elemento que ocupa la segunda posición.
// ● Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

let getCities = () => {
    let cities = [];
    let input = "";
    do {
        input = prompt("Ingresa una ciudad:");
        input == null ? console.log(cities) : cities.push(input);
    } while (input !== null);
    document.write(`La longitud del arreglo es ${cities.length}. <br>`);
    document.write(`La primera posición es ${cities[0]}, la tercera es ${cities[2]} y la última es ${cities[cities.length-1]}. <br>`);
    cities.push("Paris");
    console.log(cities);
    document.write(`La segunda posición es ${cities[1]}. <br>`);
    cities.splice(1,1,'Barcelona');
    console.log(cities);
}

getCities();
