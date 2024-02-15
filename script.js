const modal = document.querySelector("#tarjeta")
const btn1 = document.querySelector("#abrir")
const btn2 = document.querySelector("#cerrar")
const contenido = document.querySelector("#contenido")
const carta = document.querySelector("#carta")

btn1.addEventListener('click', ()=>{
    modal.style.animation = 'apear 3s both';
    contenido.style.animation = 'fade2 3s both';
    carta.classList.add("abierto")
})

btn2.addEventListener('click', ()=>{
    modal.style.animation = 'desapear 3s both';
    contenido.style.animation = 'fade 3s both';
    setTimeout(function(){
        carta.classList.remove("abierto")
    }, 3500);
})