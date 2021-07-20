// Seleccionamos el demo
let demo = document.querySelector("#demo");

// Pedimos el texto al usurio
let respuesta = prompt("Ingresa una pregunta: ");

// Inyectamos en el demo una plantilla con el texto del usuario
demo.innerHTML += `<p>${respuesta}</p>`

let texto2 = prompt("Ingrese la respuesta");

// Creo el nodo elemento
let element2 = document.createElement('p');
// Creo el nodo texto
let nodoTexto2 = document.createTextNode(texto2);
// Al elemento le agrego el nodo texto
element2.appendChild(nodoTexto2);

// A nuestro contenedor le agrego el elemento completo
demo.appendChild(element2);