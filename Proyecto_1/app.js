function enviarAlerta1(){
    let jugador = 0
    let opcion = 0
    opcion = document.getElementsByName('opcion')[0].value
    let pc = Math.floor(Math.random()*3)+1;

    if(opcion = "Piedra"){
        jugador = 1
        alert("Elegiste piedra")
    }
    
    // eleccion de la PC

    if (pc == 1) {
        alert("Pc elige piedra")
    }
    else if(pc == 2){
        alert("Pc elige papel")
    }
    else if(pc == 3){
        alert("Pc elige tijera")
    }
    
    // combate entre pc y jugador

    if (pc == jugador) {
        alert("EMPATE")
    }
    else if(jugador == 1 && pc == 3){
        alert("GANASTE")
    }
    else{
        alert("PERDISTE")
    }
  }
  
  function enviarAlerta2(){
    let jugador = 0
    let opcion = 0
    opcion = document.getElementsByName('opcion')[0].value
    let pc = Math.floor(Math.random()*3)+1;

    if(opcion1 = "Papel"){
        jugador = 2
        alert("elegiste Papel")
    }
    
    // eleccion de la PC

    if (pc == 1) {
        alert("Pc elige piedra")
    }
    else if(pc == 2){
        alert("Pc elige papel")
    }
    else if(pc == 3){
        alert("Pc elige tijera")
    }
    
    // combate entre pc y jugador

    if (pc == jugador) {
        alert("EMPATE")
    }
    else if(jugador == 2 && pc == 1){
        alert("GANASTE")
    }
    else{
        alert("PERDISTE")
    }
  }

  function enviarAlerta3(){
    let jugador = 0
    let opcion = 0
    opcion = document.getElementsByName('opcion')[0].value

    if(opcion1 = "Tijera"){
        jugador = 3
        alert("Elegiste tijera")
    }
    
    // eleccion de la PC

    let pc = Math.floor(Math.random()*3)+1;
    if (pc == 1) {
        alert("Pc elige piedra")
    }
    else if(pc == 2){
        alert("Pc elige papel")
    }
    else if(pc == 3){
        alert("Pc elige tijera")
    }

    // combate entre pc y jugador

    if (pc == jugador) {
        alert("EMPATE")
    }
    else if(jugador == 3 && pc == 2){
        alert("GANASTE")
    }
    else{
        alert("PERDISTE")
    }
  }