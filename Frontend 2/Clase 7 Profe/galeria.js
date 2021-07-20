let urlImagenes = [];

let imagenes =  document.querySelectorAll('.imagen');

for(let i=0; i<imagenes.length; i++){
    let url = prompt("Ingrese una url de imagen");
    urlImagenes.push(url);
}

for(let i=0; i<urlImagenes.length; i++){
    let nodo = document.querySelector(`#imagen-${i+1}`)
    let nodo2 = document.querySelector('.rutas-img')
    console.log(nodo.hasAttribute('src'));
    nodo.setAttribute('src',urlImagenes[i])
}