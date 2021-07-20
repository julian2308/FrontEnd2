const listadoTareasPendientes = [
    {
        descripcion: "Mi hermosa tarea 1",
        creada: "19/04/20"
    },
    {
        descripcion: "Mi hermosa tarea 2",
        creada: "19/04/20"
    },
    {
        descripcion: "Mi hermosa tarea 3",
        creada: "19/04/20"
    }
]


//template de tarea
/* <li class="tarea">
      <div class="not-done"></div>
      <div class="descripcion">
        <p class="nombre">Mi hermosa tarea</p>
        <p class="timestamp">Creada: 19/04/20</p>
      </div>
    </li> */

listadoTareasPendientes.forEach(item =>{
    //utilizar la funcion de rendizar
    renderizarTareaPendiente(item)

})

function renderizarTareaPendiente(tarea) {
    //renderizar en el contenedor tareas pendiente
    let tareasPendientes = document.querySelector('.tareas-pendientes')
    tareasPendientes.innerHTML += `<li class="tarea">
    <div class="not-done"></div>
    <div class="descripcion">
      <p class="nombre">${tarea.descripcion}</p>
      <p class="timestamp">${tarea.creada}</p>
    </div>
  </li>`
    
}