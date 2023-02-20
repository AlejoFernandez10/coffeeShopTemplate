const formBtn = document.getElementById(`formBtn`);



formBtn.addEventListener(`click`, ()=>{
    Swal.fire({
        icon: 'success',
        title: 'Mensaje Enviado!',
        text: 'Su mensaje fue enviado exitosamente, recibirá una respuesta en aproximadamente 2 dias hábiles',
        confirmButtonText: `OK!`
      })
})