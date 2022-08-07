

const tarjetasHtml = PRODUCTOS.productos.reduce((acc, elemento, i) => {   

        return acc = acc + `    
            <div class="tarjeta">
                <div class="img-container">
                    <img src=${elemento.img} alt=${elemento.name}>
                </div>   
                <p>
                    ${elemento.name} 
                   
                </p> 
                $ ${elemento.price}
                
                
            </div>
            
        `       
},"")

console.log(tarjetasHtml)

const contenedorTarjetas = document.querySelector(".contenedor-tarjetas")



contenedorTarjetas.innerHTML = tarjetasHtml

