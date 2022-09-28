const burger = document.querySelector(".burger")

function vizualizarLista(){
    const lista = document.querySelector(".lista")
    const listaLI = document.querySelectorAll(".lista__li")
    
    lista.classList.toggle("lista--activada")
    burger.classList.toggle("toggle")

    listaLI.forEach((li, index) => (li.style.transition = `all ${2*index+2}s`))
}

burger.addEventListener("click",vizualizarLista)