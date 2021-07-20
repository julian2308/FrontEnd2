let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona.nombre = prompt("Ingresa tu nombre");
  datosPersona.edad = 2021 - prompt ("Ingresa el año en que naciste");
  datosPersona.ciudad = prompt ("Ingresa la ciudad donde vives");
  datosPersona.interesPorJs = confirm("Te interesa JavaScript")
  if (datosPersona.interesPorJs){
    datosPersona.interesPorJs = ("Si");
  } else{
    datosPersona.interesPorJs = ("No");
  }
}



function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  let nombre = document.querySelector('#nombre')
  nombre.innerText += datosPersona.nombre;
  let edad = document.querySelector('#edad')
  edad.innerText += datosPersona.edad;
  let ciudad = document.querySelector('#ciudad')
  ciudad.innerText += datosPersona.ciudad;
  let interesPorJs = document.querySelector('#javascript')
  interesPorJs.innerText += datosPersona.interesPorJs;
}


/* ------------------------- NO MODIFICAR ESTE ARRAY ------------------------ */
const listado = [
  {
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://image.flaticon.com/icons/png/512/919/919828.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://image.flaticon.com/icons/png/512/919/919851.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

function recorrerListadoYRenderizarTarjetas(tarjeta) {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  listado.forEach(tarjeta =>{
    let materiasFe = document.querySelector('#fila');
    materiasFe.innerHTML += `
    <div class = caja>
      <img src = ${tarjeta.imgUrl} alt = "${tarjeta.lenguajes}">
      <p class = "lenguajes"> Lenguajes: ${tarjeta.lenguajes}</p>
      <p class = "bimestre"> Bimestre: ${tarjeta.bimestre}</p>
    </div>
  `
  })
  
  
  
  
}


function mostrarYOcultarDescripcionCompleta() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  let verMas = document.querySelector('.sobre-mi');
  verMas.classList.toggle('sobre-mi-completo');

  
  
}
