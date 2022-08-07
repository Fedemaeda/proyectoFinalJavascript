
// Formulario de contacto

const formulario = document.querySelector("#contact-form")
const inputNombres = document.querySelector("#nombre")
const inputEmail = document.querySelector("#email")
const inputMensaje = document.querySelector("#mensaje")

console.log(formulario, inputNombres, inputEmail, inputMensaje)


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





formulario.onsubmit = (event) => {
    event.preventDefault()
    clientes.push(new cliente(inputNombres.value, inputEmail.value, inputMensaje.value))
    formulario.reset() 
    convertirAJSONYSubirAlLS("clientes", clientes) 
    console.log(clientes)
}





