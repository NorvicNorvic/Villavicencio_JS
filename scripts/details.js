

const contenedorTarjetas = document.getElementById('imagenesDetails')//capturo el elemento del documento que se quiere modificar

contenedorTarjetas.innerHTML=crearTarjetas(data.events)

function crearTarjetas(arrayData) {

let cards = '' //defino un string vacío

for (const evento of arrayData) {
cards += `<article> 
<div class="divCont">
<img class= "imaDet" src="${evento.image}" alt="">
</div>
<div class="detalles">
  <h4>${evento.name}</h4>
  <div class="parrafo">
    <p>${evento.description}</p>
  </div>
  <div class="bootonCard">
  <div class="precio">
  <p>Precio $${evento.price}</p>
</div>
</div>

</article>`
}
return cards

}