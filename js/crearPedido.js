const opcionesContainer = document.getElementById(`opciones-container`)

const opcion1 = document.getElementById(`opcion1`)
const opcion2 = document.getElementById(`opcion2`)
const opcion3 = document.getElementById(`opcion3`)
const opcion4 = document.getElementById(`opcion4`)


opcion2.style.display= "none"
opcion3.style.display= "none"
opcion4.style.display= "none"



opcion1.addEventListener(`click`,()=>{

    opcion1.classList.add(`desaparecer`);

    setTimeout(()=>{
        
    opcion1.style.display = "none"        
    opcion2.style.display = "grid"
    opcion2.classList.add(`aparecer`)    
    }, 400)
})



opcion2.addEventListener(`click`,()=>{
    
    opcion2.classList.add(`desaparecer`);

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

    setTimeout(()=>{


        opcion4.style.display = "none"        
           
        }, 400)
})



const addCartBtn = document.getElementById(`añadir-Carrito-Btn`);




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


addCartBtn.addEventListener(`click`, ()=>{
    sessionStorage.setItem(`pedidoGrano`, resumenPedido[0]);
    sessionStorage.setItem(`pedidoCafe`, resumenPedido[1]);
    sessionStorage.setItem(`pedidoCantidad`, resumenPedido[2]);
    sessionStorage.setItem(`pedidoFrecuencia`, resumenPedido[3]);

    Swal.fire({
        icon: 'success',
        title: 'Pedido realizado!',
        text: 'Su pedido fue agregado al carrito correctamente',
        confirmButtonText: `<a href="./cart.html" id="añadir-Carrito-Btn" style=" text-decoration:none;background-color:transparent;border:none;color:#fff;">Ir al carrito</a>`
      })
})



