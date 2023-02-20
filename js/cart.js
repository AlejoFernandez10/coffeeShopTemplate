
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

const carritoVacioMSG = document.getElementById(`carritoVacioMSG`);
const vaciarCarritoBtn = document.getElementById(`vaciarCarritoBtn`);

const cargandoProdcutos = document.getElementById(`cargandoProductos`)


if(sessionStorage.getItem(`pedidoGrano`) !=  null ){
    resumenPedido.style.display ="none"
    carritoVacioMSG.style.display = "none";
    cargandoProdcutos.style.display = "flex";

    setTimeout(()=>{
        cargandoProdcutos.style.display = "none"
        resumenPedido.style.display = "inline-block";
    },1000)
}
else{
    resumenPedido.style.display = "none"
}




vaciarCarritoBtn.addEventListener(`click`,()=>{
    sessionStorage.clear();   
    resumenPedido.style.display = "none"; 
    carritoVacioMSG.style.display = "flex";
    
})



const finalizarCompraBtn = document.getElementById(`finalizarCompraBtn`)


finalizarCompraBtn.addEventListener(`click`, ()=>{
    Swal.fire({
        icon: 'success',
        title: 'Compra realizada!',
        text: 'Su compra fue realizada correctamente',
        confirmButtonText: `<a id="añadir-Carrito-Btn" style=" text-decoration:none;background-color:transparent;border:none;color:#fff;">Ok!</a>`
      })
})