/* 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
● ISBN
● Título
● Autor
● Número de páginas
Crear sus respectivos métodos get y set correspondientes para cada propiedad.
Crear el método mostrarLibro() para mostrar la información relativa al libro con el
siguiente formato:
“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas. */

class Libro{
    constructor(isbn, titulo, autor, pagina){
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.pagina = pagina;
    }

    set setIsbn(value){
        this.isbn = value;
    }
    
    set setTitulo(value){
        this.titulo = value;
    }

    set setAutor(value){
        this.autor = value;
    }

    set setPagina(value){
        this.pagina = value;
    }
    
    get getIsbn(){
        return console.log(`El isbn del libro es ${this.isbn}`);
    }

    get getTitulo(){
        return console.log(`El titulo del libro es ${this.titulo}`);
    }

    get getAutor(){
        return console.log(`El autor del libro es ${this.autor}`);
    }

    get getPagina(){
        return console.log(`El número de paginas del libro es ${this.pagina}`);
    }

    mostrarLibro(){
        return console.log(`El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene páginas ${this.pagina}`);
    }

}

let libro1 = new Libro(9789877391480, "La tía Cósima","Florencia Bonelli",576);
let libro2 = new Libro(9789878000107, "Harry Potter y la Piedra Filosofal", "J.K. Rowling", 288);

libro1.mostrarLibro();
libro2.mostrarLibro();

const mayorCantidad = ()=>{
    if(libro1.pagina > libro2.pagina){
        return console.log(`El libro ${libro1.titulo} tiene más páginas que ${libro2.titulo}`);
    }
    else{
        return console.log(`El libro ${libro2.titulo} tiene más páginas que ${libro1.titulo}`);
    }
}

mayorCantidad();