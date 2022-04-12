/* 5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura,
año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.

Los métodos que se debe poder utilizar son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué
generación pertenece la persona creada y cual es el rasgo característico de esta
generación.
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la
persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras. */

class Persona{
    constructor(name,age,dni,genre,weight,height){
        this.name = name;
        this.age = age;
        this.dni = dni;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
    }

    mostrarGeneracion(){
        let year = 2022 - this.age;
        switch (year) {
            case value:
                
                break;
        
            default:
                break;
        }
    }
}

