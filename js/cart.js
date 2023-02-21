


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
export default resumenPedido;

const carritoVacioMSG = document.getElementById(`carritoVacioMSG`);
const vaciarCarritoBtn = document.getElementById(`vaciarCarritoBtn`);

vaciarCarritoBtn.addEventListener(`click`,()=>{
    sessionStorage.clear();   
    resumenPedido.style.display = "none"; 
    carritoVacioMSG.style.display = "flex";
    
})



const cargandoProdcutos = document.getElementById(`cargandoProductos`)






const agregarHijoCarrito = (kit)=>{
    const cartProduct = `
<div  class="productoEleccion row mb-4 d-flex justify-content-between align-items-center" >

                          <div class="col-md-2 col-lg-3 col-xl-2">
                            <img
                              src="../assets/pedidoImagenes/beverage-1869598_640.jpg"
                              class="img-fluid rounded-2 h-100" alt="#">
                          </div>
                          <div class="col-md-3 col-lg-3 col-xl-3">
                            <h6 class="text-muted">Tipo</h6>
                            <h6 class="text-black mb-0" ></h6>
                            <h6 >${kit}</h6>
                          </div>
                          <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <button class="btn btn-link px-2"
                              onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                              <i class="fas fa-minus"></i>
                            </button>
      
                            <input id="form1" min="1" max="3" name="quantity" value="1" type="number"
                              class="form-control form-control-sm" />
      
                            <button class="btn btn-link px-2"
                              onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                              <i class="fas fa-plus"></i>
                            </button>
                          </div>
                          <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h6 class="mb-0">$ 1500</h6>
                          </div>
                          <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                            <a href="#!" class="text-muted"><i class="fas fa-times"></i></a>
                          </div>
                        </div>

                        

`

    resumenPedido.innerHTML += cartProduct;
    
} 






// Si hay pedido creado

if(sessionStorage.getItem(`pedidoGrano`) !=  null ){

    

    resumenPedido.style.display ="none"
    carritoVacioMSG.style.display = "none";
    cargandoProdcutos.style.display = "flex";

    setTimeout(()=>{
        cargandoProdcutos.style.display = "none"
        resumenPedido.style.display = "inline-block";
        resumenPedido.appendChild(cartProduct)
    },1000)
}
else{
    resumenPedido.style.display = "none";
    
}




const finalizarCompraBtn = document.getElementById(`finalizarCompraBtn`)


finalizarCompraBtn.addEventListener(`click`, ()=>{
    Swal.fire({
        icon: 'success',
        title: 'Compra realizada!',
        text: 'Su compra fue realizada correctamente',
        confirmButtonText: `<a id="añadir-Carrito-Btn" style=" text-decoration:none;background-color:transparent;border:none;color:#fff;">Ok!</a>`
      })
})






if(sessionStorage.getItem(`kitSolicitado1`) != null){
    carritoVacioMSG.style.display = "none";
    resumenPedido.style.display ="inline-block";
    agregarHijoCarrito(sessionStorage.getItem(`kitSolicitado1`));

}

if(sessionStorage.getItem(`kitSolicitado2`) != null){
    carritoVacioMSG.style.display = "none";
    resumenPedido.style.display ="inline-block";
    agregarHijoCarrito(sessionStorage.getItem(`kitSolicitado2`));
}

if(sessionStorage.getItem(`kitSolicitado3`) != null){
    carritoVacioMSG.style.display = "none";
    resumenPedido.style.display ="inline-block";
    agregarHijoCarrito(sessionStorage.getItem(`kitSolicitado3`));
}

if(sessionStorage.getItem(`kitSolicitado4`) != null){
    carritoVacioMSG.style.display = "none";
    resumenPedido.style.display ="inline-block";
    agregarHijoCarrito(sessionStorage.getItem(`kitSolicitado4`));
}

if(sessionStorage.getItem(`kitSolicitado5`) != null){
    carritoVacioMSG.style.display = "none";
    resumenPedido.style.display ="inline-block";
    agregarHijoCarrito(sessionStorage.getItem(`kitSolicitado5`));
}

if(sessionStorage.getItem(`kitSolicitado6`) != null){
    carritoVacioMSG.style.display = "none";
    resumenPedido.style.display ="inline-block";
    agregarHijoCarrito(sessionStorage.getItem(`kitSolicitado6`));
}






console.log(kitsSolicitados)