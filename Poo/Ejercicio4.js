// 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar
// las propiedades código, nombre y precio, además del método imprime datos, el
// cual escribe por pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores
// de los tres objetos instanciados.

class Producto{
  constructor(codigo, nombre, precio){
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  imprimeDatos(){
    console.log(`Código: ${this.codigo}`);
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Precio: $${this.precio}`);
  }
}

let arrayProductos = [];
let producto1 = new Producto(101, "Mouse", 1250);
let producto2 = new Producto(102, "Impresora", 43000);
let producto3 = new Producto(103, "Pendrive", 850);
arrayProductos.push(producto1);
arrayProductos.push(producto2);
arrayProductos.push(producto3);
arrayProductos.map(function(item){
  item.imprimeDatos();
})