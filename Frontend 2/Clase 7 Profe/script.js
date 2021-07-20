// Seleccionamos el demo
let demo = document.querySelector("#demo");

// Pedimos el texto al usurio
let texto = prompt("Ingrese una pregunta: ");


// Inyectamos en el demo una plantilla con el texto del usuario
demo.innerHTML += `<h2>${texto}</h2>`

let texto2 = prompt("Ingrese la respuesta");


/* ------------------------------------ * ----------------------------------- */
//creo el nodo elemento
let element2 = document.createElement('p');
//creo el nodo texto
let nodoTexto2 = document.createTextNode(texto2)
//al elemento le agrego el nodo texto
element2.appendChild(nodoTexto2);

//a nuestro contenedor le agrego el elemento completo
demo.appendChild(element2);



