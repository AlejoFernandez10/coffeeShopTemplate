

const opcion1 = document.getElementById(`opcion1`)
const opcion2 = document.getElementById(`opcion2`)
const opcion3 = document.getElementById(`opcion3`)
const opcion4 = document.getElementById(`opcion4`)


opcion2.style.display= "none"
opcion3.style.display= "none"
opcion4.style.display= "none"

let carritoCounter = document.getElementById(`carritoCounter`)
carritoCounter.innerHTML = 0

opcion1.addEventListener(`click`,()=>{

    opcion1.classList.add(`desaparecer`);
    addCartBtn.style.top = `700px`
    setTimeout(()=>{
        
    opcion1.style.display = "none"        
    opcion2.style.display = "grid"
    opcion2.classList.add(`aparecer`)    
    }, 400)
})



opcion2.addEventListener(`click`,()=>{
    
    opcion2.classList.add(`desaparecer`);
    addCartBtn.style.top = `450px`

    const paso2 = document.getElementById(`paso2`);
    paso2.style.opacity = "1"
    

    setTimeout(()=>{
        
    opcion2.style.display = "none"  
    opcion3.style.display = "flex"
    
    opcion3.classList.add(`aparecer`)   
    
    
    }, 400)
})



opcion3.addEventListener(`click`,()=>{

    opcion3.classList.add(`desaparecer`);

    const paso3 = document.getElementById(`paso3`);
    paso3.style.opacity = "1"

    setTimeout(()=>{


    opcion3.style.display = "none"        
    opcion4.style.display = "flex"
    opcion4.classList.add(`aparecer`)    
    }, 400)
})

opcion4.addEventListener(`click`, ()=>{

    

    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Pedido terminado!',
        text: 'Solo queda agregarlo al carrito',        
        confirmButtonText:`Ok!`,
      })
})



const addCartBtn = document.getElementById(`añadirCarritoBtn`);




//Otengo los valores de las elecciones clickeadas

const elecciones = document.querySelectorAll(`.eleccion`);
const precios = document.querySelectorAll(`.precio`)


const resumenPedido = [];



elecciones.forEach(eleccion =>{

    eleccion.addEventListener(`click`, ()=>{      

        eleccion.style.transition = ".1s"
        eleccion.style.backgroundColor = "#ca663b"
        eleccion.style.color = "#fff"

        resumenPedido.push(eleccion.children[0].innerHTML)        

    })
})



//ENVIO PEDIDO AL SESSION STORAGE

/* const mostrarCarrito = document.getElementById(`mostrarCarrito`) */
const cartSection = document.getElementById(`cart`)
const mainContainer = document.getElementById(`main-container`)
const cartTarget = document.getElementById(`cartTarget`)

addCartBtn.addEventListener(`click`, ()=>{
    carritoCounter.innerHTML ++;
    sessionStorage.setItem(`pedidoGrano`, resumenPedido[0]);
    sessionStorage.setItem(`pedidoCafe`, resumenPedido[1]);
    sessionStorage.setItem(`pedidoCantidad`, resumenPedido[2]);
    sessionStorage.setItem(`pedidoFrecuencia`, resumenPedido[3]);

    Swal.fire({
        icon: 'success',
        title: 'Pedido realizado!',
        text: 'Continue al carrito para finalizar su compra',
        confirmButtonText: `<a href="#cartTarget" id="irAlCarrito"  style=" text-decoration:none;background-color:transparent;border:none;color:#fff;">Ir al carrito</a>`
      })


      const irAlCarrito = document.getElementById(`irAlCarrito`)

      irAlCarrito.addEventListener(`click`,()=>{

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
        
        

        if(sessionStorage.getItem(`pedidoFrecuencia`) != null | sessionStorage.getItem(`pedidoFrecuencia`) != undefined | sessionStorage.getItem(`pedidoFrecuencia`) != ` `){
            const breadcrumbLink = document.getElementById(`breadcrumbLink`)
            breadcrumbLink.style.display = "inline";
            mainContainer.style.display ="none";
            cartSection.style.display ="inline";
            }  

      })         

})



const vaciarCarritoBtn = document.getElementById(`vaciarCarritoBtn`)
const productosCarrito =document.getElementById(`productos-carrito`)

vaciarCarritoBtn.addEventListener(`click`,()=>{
    productosCarrito.innerHTML = ` `;
    carritoCounter.innerHTML = 0
  
  
  Swal.fire({
    icon:`success`,
    title:`Carrito vacío!`,
    text:`Carrito vaciado correctamente`,
  })
})


const finalizarCompra = document.getElementById(`finalizarCompraBtn`)
finalizarCompra.addEventListener(`click`, ()=>{
    Swal.fire({
        icon:`success`,
        title:`Compra exitosa!`,
        text:`Disfrute su café`,
      })
})












   