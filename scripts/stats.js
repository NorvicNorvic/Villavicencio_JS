  

  // function traerDatos() {
  // fetch('./data.json')
  fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then(response => response.json())
    .then(datosApi => {
      arrEvent = datosApi.events
      let fechaBase = datosApi.currentDate;
      let eventFuturos = arrEvent.filter((evento) =>
      eventoFuturo(evento.date, fechaBase))

      let eventPasado = arrEvent.filter((evento) =>
      eventoPasado(evento.date, fechaBase))

    printTable(results(assistance(arrEvent), assistance(arrEvent).reverse(), capacity(arrEvent)), "datosSuperior")
    printTableUpc(dataTable(eventFuturos), "upcoming")
    printTablePast(dataTable(eventPasado), "past")
  })

  function eventoFuturo(event, date) {
    let dateEvent = event;
    if (dateEvent >= date) {
      return true;
    } else return false;
  }

  function eventoPasado(event, date) {
    let dateEvent = event;
    if (dateEvent < date) {
      return true;
    } else return false;
    }

// function futures(data, currentDate) {
//   return data.filter(evento => evento.date > currentDate)
// }

// function past(data, currentDate) {
//   return data.filter(event => event.date < currentDate)
// }


//evento con mayor asistencia.
function assistance(arrEvent) {
  const arrayPercentage = arrEvent.map(event => {
    return {
      attendance: (event.assistance / event.capacity) * 100,
      nameEvent: event.name
    }
  })
  arrayPercentage.sort((a, b) => b.attendance - a.attendance)
  console.log(arrayPercentage)
  return arrayPercentage

}

//evento con mayor capacidad.
function capacity(arrEvent) {
  const arrayCapacity = arrEvent.map(event => {
    return {
      capacity: Math.max(event.capacity),
      nameEvent: event.name
    }
  })
  arrayCapacity.sort((a, b) => b.capacity - a.capacity)
  console.log(arrayCapacity)
  return arrayCapacity

}

function results(highestPercentage, lowestPercentage, largerCapacity) {
  let all = {
    highestPercentage: highestPercentage[0].nameEvent,
    lowestPercentage: lowestPercentage[0].nameEvent,
    largerCapacity: largerCapacity[0].nameEvent
  }
   return all
}

function printTable(results, tabla) {
  const table = document.getElementById(tabla)
  table.innerHTML += `
  <tr>
      <td>${results.highestPercentage}</td>
      <td>${results.lowestPercentage}</td>
      <td>${results.largerCapacity}</td>
  </tr>
  `
}



function dataTable(arr) {
  let categories = Array.from(new Set(arr.map(a => a.category)))

  let eventCategories = categories.map(cat =>arr.filter(event => event.category == cat))
  let result = eventCategories.map(eventCat => {
    let calculate = eventCat.reduce((acc, event) => {
      console.log(event)
      acc.category = event.category;
      acc.revenues += event.price * (event.assistance || event.estimate);
      acc.attendance += ((event.assistance || event.estimate) * 100) / event.capacity
      return acc
    }, {
      category: "",
      revenues: 0,
      attendance: 0
    })
    calculate.attendance = calculate.attendance / eventCat.length
    return calculate
  })
  return result;
}

function printTableUpc(arr, contenedor) {
  const upcomingTable = document.getElementById(contenedor)
  let html = arr.map(events => {
    return `
      <tr>
              <td>${events.category}</td>
              <td>$${events.revenues}</td>
              <td>${events.attendance.toFixed(2)}%</td>
          </tr>
      `
  })
  upcomingTable.innerHTML = html.join("")
}


function printTablePast(arr, contenedor) {
  const pastTable = document.getElementById(contenedor)
  let html = arr.map(events => {
    return `
      <tr>
              <td>${events.category}</td>
              <td>$${events.revenues}</td>
              <td>${events.attendance.toFixed(2)}%</td>
          </tr>
      `
  })
 pastTable.innerHTML = html.join("")
}























