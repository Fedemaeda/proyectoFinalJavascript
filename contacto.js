
// Formulario de contacto

const formulario = document.querySelector("#contact-form")
const inputNombres = document.querySelector("#nombre")
const inputEmail = document.querySelector("#email")
const inputMensaje = document.querySelector("#mensaje")

console.log(formulario, inputNombres, inputEmail, inputMensaje)


let clientes = []

const pushearNombre = (array, valor) => {
    array.push(valor)    
}

const pushearEmail = (array, valor) => {
    array.push(valor)    
}

const pushearMensaje = (array, valor) => {
    array.push(valor)    
}



// para entrega siguiente
// const convertirAJSONYSubirAlLS = (clave, valor) => {
//     const arrayAJSON = JSON.stringify(valor)
//     localStorage.setItem(clave, arrayAJSON)
// }





formulario.onsubmit = (event) => {
    event.preventDefault()
    pushearNombre(clientes, inputNombres.value) 
    pushearEmail(clientes, inputEmail.value)
    pushearMensaje(clientes, inputMensaje.value)

    formulario.reset() 
     
    //convertirAJSONYSubirAlLS("clientes", clientes) 
    console.log(clientes)
}





