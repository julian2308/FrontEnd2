const contador = document.querySelector('#contador');
const btn = document.querySelector('#btn-stop');

let num = 0;
contador.innerText = num;


btn.addEventListener('click', function (e) {
    console.log(e);
    //frena la ejecucion del intervalo
    clearInterval(timer)
});

window.addEventListener('keypress', (event)=>{
    //si toca barra espaciadora se resta del contador
    if(event.code=="Space"){
        num--
    }
    console.log(event);
})

let timer = setInterval(function () {
    num++
    contador.innerText = num;
}, 200);

