
const contenedorTarjetas = document.getElementById('imagenes')

function fechaEventoPasado(arrayData, date){
  
  let fechaBase=data.currentDate
  let basisDate=parseInt (fechaBase.split("-"))
  let dateEvent=parseInt(date.split("-"))

  if(dateEvent < basisDate){
   return true
   } else
   return false
}


const eventPast = data.events.filter(evento => fechaEventoPasado(data, evento.date))

contenedorTarjetas.innerHTML=crearTarjetas(eventPast)


function crearTarjetas(arrayData){

 let cards = '' //defino un string vacío

 for (const evento of arrayData) {
   cards += `<article> <div class="cards" style="width: 18rem;">

<img class="card-img-top" src="${evento.image}" alt="">
<h4>${evento.name}</h4>
<div class="parrafo">
 <p>${evento.description}</p>
</div>

<div class="bootonCard">
<div class="precio">
 <p>Precio $${evento.price}</p>
</div>
<div id="form">
 <form method="get" action="./details.html">
   <button type="submit">
     Read more...
   </button>
 </form>
</div>
</div>
</article>`
 }
 return cards

}







