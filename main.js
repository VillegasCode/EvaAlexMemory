//Pointing to html document to its IDs with quatotion marks
let mostrarMovimientos = document.getElementById("movimientos");
let mostrarAciertos = document.getElementById("aciertos");
let mostrarTiempo = document.getElementById("t-restante");
let ocultarBoton = document.getElementById("reiniciar").style.visibility = 'hidden';

//Creating variables to count time
let timer = 30;
let timerInicial = 30;
let temporizador = false;
let tiempoRegresivoId = null;

//Creating variables to ACIERTOS and MOVIMIENTOS
let aciertos = 0;
let movimientos = 0;

//Creating variables to compare first result of a tale with second result fo a tale
let primerResultado = null;
let segundoResultado = null;

//Creating variables to save the value of the tales
let tarjeta1 = null;
let tarjeta2 = null;
let tarjetasDestapadas = 0;

//Sounds to the Eva Memory Game
let winAudio = new Audio('./sounds/win.wav');
let loseAudio = new Audio('./sounds/lose.wav');
let clickAudio = new Audio('./sounds/click.wav');
let rightAudio = new Audio('./sounds/right.wav');
let wrongAudio = new Audio('./sounds/wrong.wav');

//Create un array with duplicate numbers of total of tales
let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15];

//We generate random numbers with arrow function
numeros = numeros.sort(()=>{return Math.random()-0.5});
//Write in console the numeros array of random way
console.log(numeros);

//Function to count time
function contarTiempo() {
    tiempoRegresivoId = setInterval(()=>{
        timer--;
        mostrarTiempo.innerHTML = `Tiempo: ${timer} segundos`;
        if (timer == 0) {
            clearInterval(tiempoRegresivoId);
            bloquearTarjetas();
            loseAudio.play();
        }
    },1000);
}

//Function bloquearTarjetas
function bloquearTarjetas() {
    for (let i=0; i<=30; i++) {
        //Obtenemos el objeto del index.html
        let tarjetaBloqueada = document.getElementById(i);
        //Al objeto le cambiamos su estado para que muestre la figura
        tarjetaBloqueada.innerHTML = `<img src=".images/${numeros[i]}.png" alt="">`;
        //Bloqueamos o desabilitamos la tarjeta
        tarjetaBloqueada.disabled = true;
    }
    //Obtenemos el botón llamado "reiniciar" y lo volvemos visible cada vez que las tarjetas se bloqueen
    let mostrarBoton = document.getElementById("reiniciar").style.visibility = 'visible';
}