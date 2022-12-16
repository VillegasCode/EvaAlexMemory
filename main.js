//Pointing to html document to its IDs with quatotion marks
let mostrarMovimientos = document.getElementById("movimientos");
let mostrarAciertos = document.getElementById("aciertos");
let mostrarTiempo = document.getElementById("t-restante");
let ocultarBoton = document.getElementById("reiniciar").style.visibility = 'hidden';

//Create un array with duplicate numbers of total of tales
let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15];

//We generate random numbers with arrow function
numeros = numeros.sort(()=>{return Math.random()-0.5});
//Write in console the numeros array of random way
console.log(numeros);

