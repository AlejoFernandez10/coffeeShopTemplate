/* import resumenPedido from "./cart";
 */
const kitStock = [
  {id:1,tipo:`Capsula`,cafe:`Capuccino`,cantidad:`250g`,frecuencia:`Semanal`,precio:`$1500`, stock:10},
  {id:2,tipo:`Capsula`,cafe:`Mokaccino`,cantidad:`250g`,frecuencia:`Semanal`,precio:`$1500`, stock:10},
  {id:3,tipo:`Filtro`,cafe:`Latte Macchiato`,cantidad:`250g`,frecuencia:`Semanal`,precio:`$1800`, stock:10},
  {id:4,tipo:`Filtro`,cafe:`Americano`,cantidad:`500g`,frecuencia:`Mensual`,precio:`$2000`, stock:10},
  {id:5,tipo:`Espresso`,cafe:`Rio de janeiro`,cantidad:`500g`,frecuencia:`Mensual`,precio:`$2000`, stock:10},
  {id:6,tipo:`Espresso`,cafe:`Cacao`,cantidad:`500g`,frecuencia:`Mensual`,precio:`$2000`, stock:10},
]




const cartSection = document.getElementById(`cart`)
const cargandoProductos = document.getElementById(`cargandoProductosKit`)
const kitContainer = document.getElementById(`kits-container`)

const productosCarrito = document.getElementById(`productos-carrito`)

const mostrarCarrito = document.getElementById(`mostrarCarrito`);






kitContainer.style.display = "none"

window.addEventListener(`load`, ()=>{
    cargandoProductos.style.display = "inline";
    
  
  setTimeout(()=>{
    cargandoProductos.style.display = "none";
    kitContainer.style.display = "grid"
  },1500)
})

const kitsSolicitados =[]





kitStock.forEach( kit =>{

  const div = document.createElement(`div`);

  div.innerHTML = `
  <div class="kit" >

  <div class="card">
    <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
      <img style="border-top-right-radius: 10px;border-top-left-radius: 10px;" src="../assets/coffee-cups.png" class="img-fluid"/>
      <a href="#!">
        <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
      </a>
    </div>
    <div class="card-body">
      <h5 class="card-title">Kit <span style="color: #ca663b;">${kit.cafe}</span></h5>
      <div class="descripciones">
        <span class="kit-tipo">${kit.tipo}</span>
        <span class="kit-cafe">${kit.cafe}</span>
        <span class="kit-cantidad">${kit.cantidad}</span>
        <span class="kit-frecuencia">${kit.frecuencia}</span>
        <span class="card-price">${kit.precio}</span>
       </div>
       
      <a href="#!" class="btn  agregarCarritoBtn" id="agregar${kit.id}">Agregar al carrito</a>
    </div>
  </div>
</div>
  `

  
  kitContainer.appendChild(div)

  const agregarCarritoBtn = document.getElementById(`agregar${kit.id}`)

  agregarCarritoBtn.addEventListener(`click`, ()=>{
    agregarAlCarrito(kit.id);

    if(kitsSolicitados.length <= 4){
      Swal.fire({
        icon:`success`,
        title:`Producto agregado!`,
        text:`El producto fue agregado al carrito correctamente`,
      })
      
    }else{
      
      Swal.fire({
        icon:`error`,
        title:`Carrito lleno!`,
        text:`Si quiere seguir agregando productos, elemine algunos ya agregados`,
      })
    }
    
  })
})


const eliminarProducto = (prodId)=>{
  const item = kitsSolicitados.find((prod) => prod.id === prodId);
  const index = kitsSolicitados.indexOf(item);
  kitsSolicitados.splice(index ,1);
  sumarAlCarrito()
}


const agregarAlCarrito = (prodId)=>{
  const item = kitStock.find((prod) => prod.id === prodId);

  if(kitsSolicitados.length <= 3){
    kitsSolicitados.push(item);
  }else if(kitsSolicitados.length > 3){
    !kitsSolicitados.push(item);
    
  }
  
  sumarAlCarrito(); 
  
}




const sumarAlCarrito = ()=>{

  productosCarrito.innerHTML = "";
  
  kitsSolicitados.forEach((prod)=>{

    const div = document.createElement(`div`);

  div.innerHTML = `
  <div style="display: none;" class="productoEleccion row mb-4 d-flex justify-content-between align-items-center" >
  <div class="col-md-2 col-lg-2 col-xl-2">
  <img style="border-top-right-radius: 10px;border-top-left-radius: 10px;" src="../assets/coffee-cups.png" class="img-fluid"/>
  </div>
  <div class="col-md-3 col-lg-3 col-xl-3">
    <h6 class="text-muted">Tipo</h6>
    <h6 class="text-black mb-0" ></h6>
    <h6 ><span>${prod.tipo}</span> <span >${prod.cafe}</span> <span >${prod.cantidad}</span> <span >${prod.frecuencia}</span></h6>
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
    <h6 class="mb-0">${prod.precio}</h6>
  </div>
  <div class="col-md-1 col-lg-1 col-xl-1 text-end">
    <button style="background-color:transparent;border:none;" class="text-muted" style="text-decoration:none;" onclick="eliminarProducto(${prod.Id})">X</button>
  </div>
</div>

<hr class="my-4"> `

  
  
  
  productosCarrito.appendChild(div)

  })
  
  

} 


const vaciarCarritoBtn = document.getElementById(`vaciarCarritoBtn`)

vaciarCarritoBtn.addEventListener(`click`,()=>{
  productosCarrito.innerHTML = " ";
  
  Swal.fire({
    icon:`success`,
    title:`Carrito vacío!`,
    text:`Carrito vaciado correctamente`,
  })
})
   



const showCart = ()=>{
  mostrarCarrito.addEventListener(`click`,()=>{

    if(kitsSolicitados.length != 0){
      kitContainer.style.display ="none";
      cartSection.style.display ="inline"
    }
    
    
  })
}
