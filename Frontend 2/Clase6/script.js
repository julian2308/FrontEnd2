const pregunta = confirm("Desea aplicar el modo oscuro?");

if(pregunta){
    let body = document.querySelector('body');
    body.classList.toggle('dark')
}

function alternarTema() {
    let body = document.querySelector('body');
     body.classList.toggle('dark')
}

// CONSIGNA: obtener el contenedor principa e ir agregando dinamicamente las tarjetas de los felinos.
/*
`<div class="item">
      <img src="./imagenes/tiger.jpg">
      <h2>${item.title}</h2>
      <p>
        El tigre (Panthera tigris) es una de las especies​ de la subfamilia de los panterinos (familia Felidae)
        pertenecientes al género Panthera. Se encuentra solamente en el continente asiático; es un predador carnívoro y
        es
        la especie de félido más grande del mundo junto con el león pudiendo alcanzar ambos un tamaño comparable al de
        los
        fósiles de félidos de mayor tamaño.
      </p>
    </div>`
*/
console.log(listadoFelinos);
let contenedor = document.querySelector('.contenedor');

contenedor.innerHTML += `<p>Tengo${variable} un texto</p>`

