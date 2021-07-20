let urlImagenes = [];

let imagenes = document.querySelectorAll(`.imagen`);


// Poblamos con el array vacio con urls
for(let i=0; i<imagenes.length; i++){
    let url = prompt("Ingrese una URL de imagen");
    urlImagenes.push(url);
}

// Recorre los nodos y le agrega su 'src'
for(let i=0; i<urlImagenes.length; i++){
    let nodo = document.querySelector(`#imagen-${i+1}`);
    nodo.setAttribute('src',urlImagenes[i]);
}