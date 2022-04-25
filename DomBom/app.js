//Ejercicio 1
//todo se programa en el boton 'comenzar el juego', buscar func num random entre 1 y 1000 y comparar con el input
//luego enviar mensajes alert centrados en la pantalla

let btnStart = document.getElementById('gameStart');
let inputNumber = document.getElementById('textField');  
let textResult = document.getElementById('resultGame');

const numRandom = () =>{
  let randomNumber = Math.round((Math.random() * (99 - 1 + 1)) + 1); 
  return randomNumber;
}

btnStart.addEventListener("click", (e)=>{
  // if(inputNumber.value === numRandom()){
  //   textResult.innerText = "GANASTEEEEEEE";
  // }
  // else if(inputNumber.value <= numRandom()){
  //   textResult.innerText = "EL NUMERO ES MAS ALTO";
  // }
  // else{
  //   textResult.innerHTML = "EL NUMERO ES MAS BAJO";
  // }
  // while(true){
  //   if(e.key && inputNumber.value === numRandom()){
  //     textResult.innerText = "GANASTEEEEEEE";
  //   }
  //   else if(e.key && inputNumber.value <= numRandom()){
  //     textResult.innerText = "EL NUMERO ES MAS ALTO";
  //   }
  //   else{
  //     textResult.innerHTML = "EL NUMERO ES MAS BAJO";
  //   }
  // }
})

//Ejercicio 2 - Personas
class Persona{  
constructor(nombre, edad, dni, sexo, peso, altura, añoNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.añoNacimiento = añoNacimiento;
  }
  mostrarGen () {
    switch (true) {
      case ( this.añoNacimiento >= 1930 && this.añoNacimiento <= 1948 ):
        swal(`${this.nombre} pertenece a la generación "Silent" \n
        Su rasgo caracteristico es "AUSTERIDAD"`)
        break;
      case ( this.añoNacimiento >= 1949 && this.añoNacimiento <= 1968 ):
        swal(`${this.nombre} pertenece a la generación "Baby Boom" \n
        Su rasgo caracteristico es "Ambición"`)
        break;
      case ( this.añoNacimiento >= 1969 && this.añoNacimiento <= 1980 ):
        swal(`${this.nombre} pertenece a la generación "Gen X" \n
        Su rasgo caracteristico es "Obsesión por el éxito"`)
        break;
      case ( this.añoNacimiento >= 1981 && this.añoNacimiento <= 1993 ):
        swal(`${this.nombre} pertenece a la generación "Gen Y (Millenials)" \n
        Su rasgo caracteristico es "Frustración"`)
        break;
      case ( this.añoNacimiento >= 1994 && this.añoNacimiento <= 2010 ):
        swal(`${this.nombre} pertenece a la generación "Gen Z" \n
        Su rasgo caracteristico es "Irreverencia"`)
      break;

      default:
        swal("no perteneces a nada viejo")
        break;
    }
  }

  esMayor () {
    if (this.edad >= 18) {
      swal("Eres mayor de edad")
    } else {
      swal("No eres mayor de edad")
    }
  }

  mostrarDatos () {
    swal(`DATOS PERSONALES \n
    Nombre: ${this.nombre}. \n
    Edad: ${this.edad}. \n
    DNI: ${this.dni}. \n
    Sexo: ${this.sexo}. \n
    Peso: ${this.peso}. \n
    Altura: ${this.altura}. \n
    Año de Nacimiento: ${this.añoNacimiento}.`,{
      button: "Gracias!"
    });
  }
  
  generarId () {
    this.dni = Math.round(Math.random() * 100000000);
    swal('ID generado','','success');
  }
}

let persona1 = null;

const generarPersona = () => {
  let nombre = document.getElementById("nombre").value,
  edad = document.getElementById("edad").value,
  sexo = document.getElementById("sexo").value,
  dni = document.getElementById("dni").value,
  peso = document.getElementById("peso").value,
  altura = document.getElementById("altura").value,
  año = document.getElementById("año").value;
  
  persona1 = new Persona(nombre, edad, dni, sexo, peso, altura, año);
  swal('Persona creada','','success');
}

const ejecutar = (method) => {
  persona1[method]();
}

//Ejercicio 3 - Lista de tareas

// let btnAdd = document.getElementById('btn-agregar');
// let listaTareas = [];

// const addTarea = () =>{
//   btnAdd.addEventListener('click',()=>{
//     if(document.getElementById('textTarea').value != ""){
//       let tarea = document.getElementById('textTarea').value;
//       listaTareas.push(tarea);
//       console.log(listaTareas);
//       let contenedor = document.createElement("div");
  
//       let cardTarea = `
//         <div class="card my-2 card-list">
//           <div class="card-body d-flex justify-content-between align-items-center">
//             ${tarea.toUpperCase()}
//             <button class="btn btn-outline-danger" id="btn-remove">X</button>
//           </div>
//         </div>
//       `;
  
//       contenedor.innerHTML = cardTarea;
//       document.querySelector("#lista").appendChild(contenedor);
//       document.getElementById('textTarea').value = "";
//     }else{
//       swal("Debe ingresar una tarea");
//     }
//   })
// }
let input = document.getElementById("textTarea");
let addBtn = document.getElementById("btn-agregar");
let ul = document.getElementById("ul");
let empty = document.getElementById("empty");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const text = input.value;

  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerText = text;

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    input.value = "";
    empty.style.display = "none";
  }
});

function addDeleteBtn() {
  const deleteBtn = document.createElement("button");

  deleteBtn.innerText = "X";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    const items = document.querySelectorAll("li"); //selecciona todos los elementos li

    if (items.length === 0) {
      empty.style.display = "block";
    }
  });

  return deleteBtn;
}

//Ejercicio 4 - Reloj
let pHoras = document.getElementById('horas');
let pMinutos = document.getElementById('minutos');
let pSegundos = document.getElementById('segundos');
let pDiaSemana = document.getElementById('diaSemana');
let pDia = document.getElementById('dia');
let pMes = document.getElementById('mes');
let pYear = document.getElementById('year');
let pAMPM = document.getElementById('ampm');


const actualizarHora = ()=>{
  let fecha = new Date();
  let hora = fecha.getHours();
  let minutos = fecha.getMinutes();
  let segundos = fecha.getSeconds();
  let ampm;
  let diaSemana = fecha.getDay();
  let dia = fecha.getDate();
  let mes = fecha.getMonth();
  let year = fecha.getFullYear();

  let semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'];
  let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  pDiaSemana.innerText = semana[diaSemana];
  pDia.innerText = dia;
  pMes.innerText = meses[mes];
  pYear.innerText = year;

  if(hora >=12){
    hora = hora - 12;
    ampm = 'PM';
  }else{
    ampm = 'AM';
  }

  if(hora == 0){
    hora == 12;
  }

  pHoras.innerText = hora;
  pAMPM.innerText = ampm;

  if(minutos <10){ 
    minutos = `0${minutos}`
  }

  if(segundos <10){ 
    segundos = `0${segundos}`
  }

  pMinutos.innerText = minutos;
  pSegundos.innerText = segundos;
}

actualizarHora();
setInterval(actualizarHora, 1000);

//Ejercicio 5 - Cronometro
let temporizador = document.getElementById('temporizador');
let iniciar = document.getElementById('iniciarS');
let resetear = document.getElementById('resetear');
let grabar = document.getElementById('grabar');
let almacenarTiempos = document.getElementById('almacenarTiempos');

let tiempo = 0, intervalo = 0;
let verificador = false;

const iniciarContador = () => {
    if (verificador == false) {
        intervalo = setInterval(function () {
            tiempo += 0.01;
            temporizador.innerHTML = tiempo.toFixed(2);
        }, 10);
        verificador = true;
    } else {
        verificador = false;
        clearInterval(intervalo);
    }
}

const resetearContador = () => {
    verificador = false;
    tiempo = 0;
    temporizador.innerHTML = tiempo + '.00';
    clearInterval(intervalo);
    while(almacenarTiempos.firstChild){
        almacenarTiempos.removeChild(almacenarTiempos.firstChild);
    }
}

const grabarContador = () => {
    if (temporizador.textContent === '0.00') {
        console.log('click en el botón iniciar')
    }
    else {
        let p = document.createElement('ul');
        p.innerHTML = `
        <li>Tiempo : ${tiempo.toFixed(2)}</li>
    `;
        almacenarTiempos.appendChild(p);
    }
}

const init = () => {
    iniciar.addEventListener('click', iniciarContador);
    resetear.addEventListener('click', resetearContador);
    grabar.addEventListener('click', grabarContador);
}

init();
