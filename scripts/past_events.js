
const contenedorTarjetas = document.getElementById('imagenes')
const inputBus = document.getElementById('inputBus')

let eventos = []

// function traerDatos() {
  // fetch('./data.json')
  fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then(response => response.json())
    .then(datosApi => {
      let eventos = datosApi.events;
    
      let fechaBase = datosApi.currentDate;
      let arrayFiltrado = eventos.filter((evento) =>
        eventoPasado(evento.date, fechaBase)
      );
      crearTarjetas(arrayFiltrado);

     

   // crearTarjetas(eventos)
   let categoria = obtenerCategorias(arrayFiltrado);
   filtrarCategorias(categoria);
   console.log(categoria)

   //BUSQUEDA POR INPUT
   
   inputBus.addEventListener("input", filtrarEventos);

   function filtrarEventos() {
    let arrayInput = document.querySelectorAll("input:checked");
    let categoryArray = Array.from(arrayInput).map((categ) => categ.value);
    console.log(categoryArray);
    
    let arrayFiltrado2=arrayFiltrado.filter(
      (evento) =>
        (evento.name.toLowerCase().includes(inputBus.value.toLowerCase()) ||
          evento.description
            .toLowerCase()
            .includes(inputBus.value.toLowerCase())) &&
        (categoryArray.length === 0 ||
          categoryArray.includes(evento.category))
    );
    console.log(arrayFiltrado2)
    crearTarjetas(arrayFiltrado2);

    if (arrayFiltrado2.length === 0) {
      alert("The event does not exist");
    }
  }

  //CATEGORiAS DINAMICAS
  function obtenerCategorias(arrayEventos) {
    let categoria = arrayEventos.map((categ) => categ.category);
    categoria = categoria.reduce((ant, curr) => {
      if (ant.findIndex((a) => a.toLowerCase() == curr.toLowerCase()) == -1) {
        ant.push(curr);
      }
      return ant;
    }, []);
    return categoria;
  }

  function filtrarCategorias(arrayCat) {
    checkboxes = "";
    arrayCat.forEach((categoria) => {
      checkBox.innerHTML += `<li class="nav-item">
   <input class="form-check-input input-check" name="checkbox" type="checkbox"  value="${categoria}" id="${categoria}">
   <label class="form-check-label" for="${categoria}">${categoria}</label></li>`;
    });
    checkboxes.innerHTML = checkBox;
  }

  // SELECCION DE CHECKBOX

  button.addEventListener("click", (eventos) => {
    eventos.preventDefault();

    filtrarEventos();
  });
})
.catch((error) => console.log(error.message));
//}

//traerDatos()

function crearTarjetas(arrayData) {
let cards = "";

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
  <a id="aDetails" href="./details.html?id=${evento._id}">
    Read more...
  </a>
</form>
</div>
</div>
</article>`;
}
contenedorTarjetas.innerHTML = cards;
}

function eventoPasado(event, date) {
let dateEvent = event;
if (dateEvent < date) {
  return true;
} else return false;
}
