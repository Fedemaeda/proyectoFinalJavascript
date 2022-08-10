
// Formulario de contacto

const formulario2 = document.querySelector("#contact-form")
const inputNombres = document.querySelector("#nombre")
const inputEmail = document.querySelector("#email")
const inputMensaje = document.querySelector("#mensaje")




const clientes = []
 class cliente {
     constructor(nombre, email, mensaje){
         this.nombre = nombre;
         this.email = email;
         this.mensaje = mensaje;
         
     }
 }

 const convertirAJSONYSubirAlLS = (clave, valor) => {
    const arrayAJSON = JSON.stringify(valor)
   localStorage.setItem(clave, arrayAJSON)
}



formulario2.onsubmit = (event) => {
    event.preventDefault()
    clientes.push(new cliente(inputNombres.value, inputEmail.value, inputMensaje.value))
    swal("Formulario enviado con éxito","nos contactaremos a la brevedad");
    formulario2.reset() 
    convertirAJSONYSubirAlLS("clientes", clientes) 
    
}





