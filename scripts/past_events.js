const numeros = [1, 2, 3, 4, 5];

const resultado = numeros.filter(numero => numero % 2 === 0); 

console.log('Resultado', resultado);
  // let fechaBase= data.currentDate

  // function pastEvent(dateBase, date){
  //   let currentDate=fechaBase.currentDate;
  //   let anio=parseInt(currentDate.substr(0,4));
  //   let anioEvent=parseInt(date.substr(0,4));
  //   if(anioEvent<anio){
  //     return true;
  //   } else
  //   return false;
  // }

  // const pastEvents=data.events.filter(event=>pastEvent(data, event.date));
  // let pastCards=document.getElementById('imagenes1');
  // pastCards.innerHTML=paCards(pastEvents);

  // function paCards(fechaBase){
  // let cards=''

  // const contenedorImagenes = document.querySelector('#imagenes')//capturo el elemento del documento que se quiere modificar

  // let imagenes = '' //defino un string vacío

  // for (const evento of data.events) {
  // imagenes += `<article> <div class="cards" style="width: 18rem;">

  // <img class="card-img-top" src="${evento.image}" alt="">
  // <h4>${evento.name}</h4>
  // <div class="parrafo">
  //   <p>${evento.description}</p>
  // </div>

  // <div class="bootonCard">
  // <div class="precio">
  //   <p>Precio $${evento.price}</p>
  // </div>
  // <div id="form">
  //   <form method="get" action="./details.html">
  //     <button type="submit">
  //       Read more...
  //     </button>
  //   </form>
  // </div>
  // </div>
  // </article>`
  // }

  // contenedorImagenes.innerHTML=imagenes

