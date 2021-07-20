console.log("Piedra, papel o tijera");
/* 
- La computadora debe sacar un numero del 1 al 3
- Dependiendo el nmero debe relacionarse con piedra, papel o tijera
- Debemos preguntar al usuario que opcion elige
- Debemos validar que lo elegido sea piedra, papel o tijera
- De acuerdo a las elecciones debemos arrojar un resultado
- La eleccion de computadora debe ser aleatoria 
*/

/* function mostrarMensajeEnConsola(mensaje){
    console.log(mensaje);
}*/


//Usuario elige opcion
let opcionUsuario
//Computadora elige opcion 
let opcionComputadora

let contadorUsuario = 0;
let contadorComputadora = 0;

while (contadorUsuario < 2 && contadorComputadora < 2) {
    opcionComputadora = parseInt(Math.random() * 3 + 1)
    console.log(opcionComputadora);
    let resultado = "No hay resultado";
    let comprobacion = false;
    while (comprobacion == false) {
        opcionUsuario = parseInt(prompt("Elija una opción: piedra(1),papel(2) o tijera(3)"));
        if (!isNaN(opcionUsuario) && opcionUsuario < 4 && opcionUsuario >= 1)
            comprobacion = true;
    }
    switch (true){
        case ((opcionUsuario == 1) && (opcionComputadora == 1)):
            resultado = "Empate"
            break;
        case ((opcionUsuario == 1) && (opcionComputadora == 2)):
            resultado = "Derrota";
            contadorComputadora++;
            break;
        case ((opcionUsuario == 1) && (opcionComputadora == 3)):
            resultado = "Victoria";
            contadorUsuario++;
            break;    
        case ((opcionUsuario == 2) && (opcionComputadora == 1)):
            resultado = "Victoria";
            contadorUsuario++;
            break;
        case ((opcionUsuario == 2) && (opcionComputadora == 2)):
            resultado = "Empate"
            break;
        case ((opcionUsuario == 2) && (opcionComputadora == 3)):
            resultado = "Derrota";
            contadorComputadora++;
            break;    
        case ((opcionUsuario == 3) && (opcionComputadora == 1)):
            resultado = "Derrota";
            contadorComputadora++;
            break;
        case ((opcionUsuario == 3) && (opcionComputadora == 2)):
            resultado = "Victoria";
            contadorUsuario++;
            break;
        case ((opcionUsuario == 3) && (opcionComputadora == 3)):
            resultado = "Empate"
            break;  
    }

    alert( "El resultado fue: " + resultado + " El marcador va así: " + "Usuario: " + contadorUsuario + " Computadora: " + contadorComputadora)
}

    /* https://stackoverflow.com/questions/38370979/nested-switch-statement-in-javascript/38371110 */
    /*if (opcionUsuario == 1) {
        if (opcionComputadora == 1) {
            resultado = "Empate";
        }
        if (opcionComputadora == 2) {
            resultado = "Derrota!";
            contadorComputadora++;
        }
        if (opcionComputadora == 3) {
            resultado = "Triunfo!";
            contadorUsuario++;
        }
    };
    if (opcionUsuario == 2) {
        if (opcionComputadora == 1) {
            resultado = "Triunfo!";
            contadorUsuario++;
        }
        if (opcionComputadora == 2) {
            resultado = "Empate.";
        }
        if (opcionComputadora == 3) {
            resultado = "Derrota!";
            contadorComputadora++;
        }
    }
    if (opcionUsuario == 3) {
        if (opcionComputadora == 1) {
            resultado = "Derrota!";
            contadorComputadora++;
        }
        if (opcionComputadora == 2) {
            resultado = "Triunfo!";
            contadorUsuario++;
        }
        if (opcionComputadora == 3) {
            resultado = "Empate.";
        }
    } */


