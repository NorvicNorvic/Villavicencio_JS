function traerDatos() {
  // fetch('./data.json')
  fetch("https://mindhub-xj03.onrender.com/api/amazing")

    .then(response => response.json())
    .then(datosApi => {
      eventos = datosApi.events
      
      //  let percentage = assistance(arrayPast)
      // let maxCapacity = capacity(arrayPast)
      printTable(results(assistance(arrayPast), assistance(arrayPast).reverse(), capacity(arrayPast)), "datosSuperior")

      // Tabla de calculo
      printTable(dataTable(eventosFuturos), "upcoming")
      printTable(dataTable(eventosPasados), "past")
        
          })
      .catch(error => console.log(error.message))
  }
  
  traerDatos()
    
  function assistance(arrPast) {
    const arrayPercentage = arrPast.map(event => {
      return {
        attendance: (event.assistance / event.capacity) * 100,
        nameEvent: event.name
      }
    })
    arrayPercentage.sort((a, b) => b.attendance - a.attendance)
    console.log(arrayPercentage)
    return arrayPercentage

  }