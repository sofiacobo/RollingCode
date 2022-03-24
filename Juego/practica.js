const opciones = ["Piedra", "Papel", "Tijera"];
let jugador = null;
let bot = null;

function playGame (){
    aleatorio();
    seleccionUsuario();
}

function aleatorio () {
    return (bot = Math.round(Math.random())*2);
}



function seleccionUsuario(){
    jugador = parseInt(prompt("0=Piedra, 1=Papel, 2=Tijera. Elije: "));
    
    if(!isNaN(jugador)){
      if (jugador===0 || jugador===1 || jugador===2) {
            switch (true) {
                case jugador===bot:
                    alert("EMPATE");
                    break;
                
                case jugador===0 && bot===2:
                    alert("GANASTE");
                    break;

                case jugador===1 && bot===0:
                    alert("GANASTE");
                    break;

                case jugador===2 && bot===1:
                  alert("GANASTE");
                  break;
            
                default:
                  alert("PERDISTE");
                  break;
            }
        } else {
          alert("Solo puedes ingresar números boluda");
        }
    }else{
        alert("Solo puedes ingresar números");
    }
}

playGame();
document.write(`<h1> El bot elije: ${opciones[bot]}</h1> <br><h1> El jugador elije: ${opciones[jugador]}</h1>`);
