

const tabla = document.getElementById('tabla')
let urlApi = "https://mindhub-xj03.onrender.com/api/amazing"



let eventos = []

function traerDatos() {
  // fetch('./data.json')
  fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then(response => response.json())
    .then(datosApi => { eventos = datosApi.events
  
    })
    .catch(error => console.log(error.message))
}

traerDatos()

let body = ""
for (var i = 0; i < data.length; i++) {      
   body+=`<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].email}</td></tr>`
}
tabla= document.getElementById('data').innerHTML 