 let carrito2 = JSON.parse(localStorage.getItem("carrito")) || []
 const detalle = document.querySelector("#detalle")

 function productosCarrito() {
     carrito2.map(producto => {
         detalle.innerHTML += `
          <li class="detalleProd">
          <img src="${producto.img}"/>
          <p>${producto.name}</p>
          <p>$${producto.price}</p>
        
          </li>`
     });
    
    }

 

// Mesaje para carrito vacío
carrito2.length ? productosCarrito() : (detalle.innerHTML=`<h3>El carrito está vacío</h3>`)


//FORMULARIO de compra
let nombre = document.querySelector("#nombre")
let mail = document.querySelector("#mail")
let telefono = document.querySelector("#telefono")
let direccion = document.querySelector("#direccion")
let divConfirmacion = document.querySelector("#confirmacion")
let submit = document.querySelector("#submit")
let formulario = document.querySelector("#form")

function terminarCompra() {

    if (nombre.value !== "" && mail.value !== "" && telefono.value !== "" && direccion.value !== "") {
        divConfirmacion.innerHTML = 
        
       `<h3>${nombre.value}, Gracias por tu compra !</h3>
        <p>Nos comunicaremos a la brevedad para coordinar el envío a ${direccion.value}</p>
    `
    swal("Su pedido se ha realizado con éxito");
    } else {
        divConfirmacion.innerHTML = `
        <h3>Por favor complete todos los campos</h3>`
    }
}


formulario.onsubmit = (e) => {
    e.preventDefault()
    terminarCompra()
    formulario.reset()
}