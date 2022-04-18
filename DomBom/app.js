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

init();

function init() {
    iniciar.addEventListener('click', iniciarContador);
    resetear.addEventListener('click', resetearContador);
    grabar.addEventListener('click', grabarContador);
}

function iniciarContador() {
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

function resetearContador() {
    verificador = false;
    tiempo = 0;
    temporizador.innerHTML = tiempo + '.00';
    clearInterval(intervalo);
    while(almacenarTiempos.firstChild){
        almacenarTiempos.removeChild(almacenarTiempos.firstChild);
    }
}

function grabarContador() {
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