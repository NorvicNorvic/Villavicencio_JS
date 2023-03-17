console.log([document])


    let params = new URLSearchParams(document.location.search)

    let id = params.get("id")

    let detalle = data.events.filter(info => info.id == id)

    const contenedorTarjetas = document.getElementById('imagenesDetails')

    let cards = ""
    
    cards +=  `<article> 
    <div class="divCont">
    <img class= "imaDet" src="${detalle[0].image}" alt="${detalle[0].name}">
    </div>
    <div class="detalles">
      <h4>${detalle[0].name}</h4>
      <div class="parrafo">
        <p>${detalle[0].description}</p>
      </div>
      <div class="bootonCard">
      <div class="precio">
      <p>Precio $${detalle[0].price}</p>
    </div>
    <a id="aDetails" href="./index.html">
    Return to homepage
   </a>
    </div>
    
    </article>`
   
    contenedorTarjetas.innerHTML = cards
