

const tabla = document.getElementById('tabla')
let urlApi = "https://mindhub-xj03.onrender.com/api/amazing"



let eventos = []

function traerDatos() {
  // fetch('./data.json')
  fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then(response => response.json())
    .then(datosApi => {
  

    })
    .catch(error => console.log(error.message))
}

traerDatos()

function filtrarCategorias(arrayCat) {
  checkboxes = ''
  arrayCat.forEach(categoria => {
    checkBox.innerHTML += `<li class="nav-item"> 
     <input class="form-check-input input-check" name="checkbox" type="checkbox"  value="${categoria}" id="${categoria}">
     <label class="form-check-label" for="${categoria}">${categoria}</label></li>`
  })
  checkboxes.innerHTML = checkBox

}

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
  contenedorTarjetas.innerHTML = cards
}