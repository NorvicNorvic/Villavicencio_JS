let params = new URLSearchParams(document.location.search)

let id = params.get("id")


  fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then(response => response.json())
    .then((datosApi) => {
      
       let detalle = datosApi.events.filter((info) => info._id == id)
       

       const contenedorTarjetas = document.getElementById('imagenesDetails')
       let cards = `<article> 
                <div class="divCont">
                <img class= "imaDet" src="${detalle[0].image}" alt="${detalle[0].name}">
                </div>
                <div class="detalles">
                <h4>${detalle[0].name}</h4>
                <div class="parrafo">
                    <p>${detalle[0].description}</p>
                </div>
                <div class="parrafo">
                    <p>${detalle[0].capacity}</p>
                </div>
                <div class="parrafo">
                    <p>${detalle[0].assistance}</p>
                </div>
                <div class="bootonCard">
                <div class="precio">
                <p>Precio $${detalle[0].price}</p>
                </div>
                <div id="return">
                <a id="aDetails" href="./index.html">
                Return to homepage
            </a>
            </div>
                </div>
                
                </article>`

            contenedorTarjetas.innerHTML = cards
    })
    .catch(error => console.log(error.message))
