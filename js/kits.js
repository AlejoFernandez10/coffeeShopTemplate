const cargandoProductos = document.getElementById(`cargandoProductosKit`)
const kitContainer = document.getElementById(`kits-container`)


window.addEventListener(`load`, ()=>{
    cargandoProductos.style.display = "inline";
    kitContainer.style.display = "none"
  
  setTimeout(()=>{
    cargandoProductos.style.display = "none";
    kitContainer.style.display = "grid"
  },1500)
})


//Enviar kits al session storage

const descripcionesKit = document.querySelectorAll(`.descripciones`);
const agregarCarritoBtn = document.querySelectorAll(`.agregarCarritoBtn`);


let kitSolicitado = []


agregarCarritoBtn.forEach(btn =>{

  btn.addEventListener(`click`, ()=>{    


    kitSolicitado.push(btn.previousElementSibling.children[0].innerHTML)
    kitSolicitado.push(btn.previousElementSibling.children[1].innerHTML)
    kitSolicitado.push(btn.previousElementSibling.children[2].innerHTML)
    kitSolicitado.push(btn.previousElementSibling.children[3].innerHTML)
    kitSolicitado.push(btn.previousElementSibling.children[4].innerHTML)



    sessionStorage.setItem(`kit-añadido`, kitSolicitado)
  })
})