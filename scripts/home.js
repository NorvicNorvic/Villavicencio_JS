const contenedorTarjetas = document.getElementById('imagenes')

contenedorTarjetas.innerHTML=crearTarjetas(data.events)

function crearTarjetas(arrayData) {

let cards = '' 

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



//BÚSQUEDA POR INPUT


let eventos = data.events
let nombres =  eventos.map(nombr => nombr.name)
let descripcion =  eventos.map(descrip => descrip.description)
const nameDescrip = nombres.concat(descripcion)

function dibujarLista(nameDescEvent){

  lista.innerHTML =""

  nameDescEvent.forEach((evento) => {
    let listItem = document.createElement("div")
    listItem.innerHTML = evento

    lista.appendChild(listItem)
  })
}

  inputBus.addEventListener('keyup', () =>{
    let eventosFiltrados = nameDescrip.filter((evento) => evento.toLowerCase().includes(inputBus.value.toLowerCase()))
    dibujarLista(eventosFiltrados)
})



//CATEGORÍAS DINÁMICAS
var checkboxes = document.getElementById('checkBox')

  let even= data.events
  let categoria =  even.map(categ => categ.category)
  
  categoria = categoria.reduce((ant, curr)=> {
    if(ant.findIndex((a) => a.toLowerCase() == curr.toLowerCase()) == -1){
     ant.push(curr)
    }
    return ant
  }, [])
  
 
  const checkBox = categoria.map(categoria => `<li class="nav-item"> 
  <input class="form-check-input" name="checkbox" type="checkbox" id="inlineCheckbox1" value="option1">
  <label class="form-check-label" for="inlineCheckbox1">${categoria}</label>
   </li>`)
  
   checkboxes.innerHTML=checkBox
