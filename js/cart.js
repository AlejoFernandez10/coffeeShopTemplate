
const pedidoGrano = sessionStorage.getItem(`pedidoGrano`)
const pedidoCafe = sessionStorage.getItem(`pedidoCafe`)
const pedidoCantidad = sessionStorage.getItem(`pedidoCantidad`)
const pedidoFrecuencia = sessionStorage.getItem(`pedidoFrecuencia`)



const granoSeleccionado = document.getElementById(`granoSeleccionado`)
const cafeSeleccionado = document.getElementById(`cafeSeleccionado`)
const cantidadSeleccionada = document.getElementById(`cantidadSeleccionada`)
const frecuenciaSeleccionada = document.getElementById(`frecuenciaSeleccionada`)


granoSeleccionado.innerText = pedidoGrano;
cafeSeleccionado.innerText = pedidoCafe;
cantidadSeleccionada.innerText = pedidoCantidad
frecuenciaSeleccionada.innerText = pedidoFrecuencia


const precioTotal = document.getElementById(`precioTotal`)

precioTotal.innerHTML = 1200 + 4000 + 1000 + 500;




const resumenPedido = document.getElementById(`resumenPedido`)

const carritoVacioMSG = document.getElementById(`carritoVacio`);
const vaciarCarritoBtn = document.getElementById(`vaciarCarrito`);



if(sessionStorage.getItem(`pedidoGrano`) !=  null ){
    resumenPedido.style.display = "flex"
}
else{
    resumenPedido.style.display = "none"
}



vaciarCarritoBtn.addEventListener(`click`,()=>{

    sessionStorage.clear();   
    resumenPedido.style.display = "none"; 
    carritoVacioMSG.style.display = "inline";

    
})