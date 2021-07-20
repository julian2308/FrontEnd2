/* const PREMIOTOTAL = 2500;
const CASILLA = 10;
function calcular(aciertos){
    aciertos*2500/10
}*/

// Loteria
let valorIngresado;
do {valorIngresado = prompt("Ingresa un objeto y lugar con el que soñaste");}
while (!isNaN (valorIngresado))
let numeroAleatorio = parseInt(Math.random()*4);
function resultadoLoteria () {
switch (numeroAleatorio) {
    case 0:
    console.log("Ganaste 1000 dólares");
        break;
    case 1:
    console.log("Ganaste 10000 dólares");
        break;
    case 2:
    console.log("Ganaste 10000 dólares");
        break;
    case 3:
    console.log("Ganaste 100000 dólares");
        break;         
    default:
        break;
}
}
resultadoLoteria();