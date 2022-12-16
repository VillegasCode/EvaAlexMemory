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
    })
}