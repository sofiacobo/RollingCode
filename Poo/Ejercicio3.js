// 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las
// propiedades de alto y ancho, mas los métodos necesarios para modificar y
// mostrar sus propiedades, calcular el perímetro y el área

class Rectangle{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
    
    set changeHeight(value=4){
        this.height = value;
    }
    
    set changeWidth(value=2){
        this.width = value;
    }
    
    get areaRectangle(){
        return console.log(`El area es ${this.height*this.width}`);
    }

    get perimeterRectangle(){
        return console.log(`El perimetro es ${2*(this.height + this.width)}`);
    }      
}

let rectangulo = new Rectangle(5,4);
rectangulo.changeHeight;
rectangulo.changeWidth;
rectangulo.areaRectangle;
rectangulo.perimeterRectangle;



