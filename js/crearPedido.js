

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
    opcion3.style.display = "grid"
    
    opcion3.classList.add(`aparecer`)   
    
    
    }, 400)
})



opcion3.addEventListener(`click`,()=>{

    opcion3.classList.add(`desaparecer`);

    const paso3 = document.getElementById(`paso3`);
    paso3.style.opacity = "1"

    setTimeout(()=>{


    opcion3.style.display = "none"        
    opcion4.style.display = "grid"
    opcion4.classList.add(`aparecer`)    
    }, 400)
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


const cartSection = document.getElementById(`cart`)
const mainContainer = document.getElementById(`main-container`)
const cartTarget = document.getElementById(`cartTarget`)
const productosCarrito = document.getElementById(`productos-carrito`);

productosCarrito.innerHTML = ` `


addCartBtn.addEventListener(`click`, ()=>{
    carritoCounter.innerHTML ++;
    sessionStorage.setItem(`pedidoGrano`, resumenPedido[0]);
    sessionStorage.setItem(`pedidoCafe`, resumenPedido[1]);
    sessionStorage.setItem(`pedidoCantidad`, resumenPedido[2]);
    sessionStorage.setItem(`pedidoFrecuencia`, resumenPedido[3]);

    const pedidoGrano = sessionStorage.getItem(`pedidoGrano`)
    const pedidoCafe = sessionStorage.getItem(`pedidoCafe`)
    const pedidoCantidad = sessionStorage.getItem(`pedidoCantidad`)
    const pedidoFrecuencia = sessionStorage.getItem(`pedidoFrecuencia`)

    Swal.fire({
        icon: 'success',
        title: 'Pedido realizado!',
        text: 'Continue al carrito para finalizar su compra',
        confirmButtonText: `<a href="#cartTarget" id="irAlCarrito"  style=" text-decoration:none;background-color:transparent;border:none;color:#fff;">Ir al carrito</a>`
      })

      /* const div = document.createElement(`div`);

        div.innerHTML = */
        
        
        productosCarrito.innerHTML =  `
        <div style="display: none;" class="productoEleccion row mb-4 d-flex justify-content-between align-items-center" >
        <div class="col-md-2 col-lg-2 col-xl-2">
        <img style="border-top-right-radius: 10px;border-top-left-radius: 10px;" src="../assets/coffee-cups.png" class="img-fluid"/>
        </div>
        <div class="col-md-3 col-lg-3 col-xl-3">
          <h6 class="text-muted">${pedidoGrano}</h6>
          <h6 class="text-black mb-3 mt-3" ></h6>
          <h6 ><span >${pedidoCafe}</span>, <span >${pedidoCantidad}</span>, <span >${pedidoFrecuencia}</span></h6>
        </div>
        <div class="col-md-3 col-lg-3 col-xl-3 d-flex mt-3 " >
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
          <h6 class="mb-3 mt-3">$1500.00</h6>
        </div>
        
      </div>
      
              <hr class="my-4"> `


      const irAlCarrito = document.getElementById(`irAlCarrito`)

      irAlCarrito.addEventListener(`click`,()=>{

        

        
        
            const breadcrumbLink = document.getElementById(`breadcrumbLink`)
            breadcrumbLink.style.display = "inline";
            mainContainer.style.display ="none";
            cartSection.style.display ="inline";           
            
        

      })         

})










const vaciarCarritoBtn = document.getElementById(`vaciarCarritoBtn`)


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

const mostrarCarrito = document.getElementById(`mostrarCarrito`)

mostrarCarrito.addEventListener(`click`,()=>{    
    cartSection.style.display ="inline"
    breadcrumbLink.style.display = "inline"            
    mainContainer.style.display ="none"; 
    })










   