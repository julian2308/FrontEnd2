const contador = document.querySelector('#contador');
const btn = document.querySelector('#btn-stop');

let num = 0;
contador.innerText = num;

btn.addEventListener('click', function (event){
    clearInterval(timer);
})

window.addEventListener('keypress', (event)=>{
    // Si toca barra espaciadora se para
    if(event.code == "Space"){
        clearInterval(timer);
    }
    console.log(event);
})



let nueCont=0;
let timer = setInterval(function(){
    num++
    contador.innerText = num;
},100);