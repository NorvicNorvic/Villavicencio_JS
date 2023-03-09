
const contenedorTarjetas = document.getElementById('imagenes')

function fechaEventoPasado(arrayData, date){
  
  let fechaBase=data.currentDate
  let basisDate=parseInt (fechaBase.split("-"))
  let dateEvent=parseInt(date.split("-"))

  if(dateEvent >= basisDate){
   return true
   } else
   return false
}


const eventUpcom = data.events.filter(evento => fechaEventoPasado(data, evento.date))

contenedorTarjetas.innerHTML=crearTarjetas(eventUpcom)


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
<form method="get" action="./details.html" >
<a id="aDetails" href="./details.html?id=${evento.id}">
  Read more...
</a>
</form>
</div>
</div>
</article>`
 }
 return cards

}

// //BUSQUEDA POR INPUT
const inputBus = document.getElementById('inputBus')

inputBus.addEventListener('keyup', () => {
  const eventosFiltrados = data.events.filter((evento) => evento.name.toLowerCase().includes(inputBus.value.toLowerCase())
    || evento.description.toLowerCase().includes(inputBus.value.toLowerCase()))

  contenedorTarjetas.innerHTML = crearTarjetas(eventosFiltrados)

  if (eventosFiltrados.length === 0) {
      alert("The event does not exist")
  }
})

 
//CATEGORiAS DINAMICAS
const checkboxes = document.getElementById('checkBox')

let even = data.events
let categoria = even.map(categ => categ.category)

categoria = categoria.reduce((ant, curr) => {
  if (ant.findIndex((a) => a.toLowerCase() == curr.toLowerCase()) == -1) 
  {
    ant.push(curr)
  }
  return ant
}, [])


const checkBox = categoria.map(categoria => `<li class="nav-item"> 
  <input class="form-check-input input-check" name="checkbox" type="checkbox"  value=${categoria}>
  <label class="form-check-label" for="inlineCheckbox">${categoria}</label></li>`)
  
  checkboxes.innerHTML = checkBox

//SELECCION DE CHECKBOX

button.addEventListener('click', (evento) => {
  evento.preventDefault()
  const button = document.querySelector("#button")

  let arrayInput = document.querySelectorAll('input:checked')
  
 let categoryArray = Array.from(arrayInput).map(categ => categ.value)

const checkFiltrados = eventUpcom.filter((evento) => evento.category.includes(categoryArray))

contenedorTarjetas.innerHTML = crearTarjetas(checkFiltrados)

})
