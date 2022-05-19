const urlprof = 'http://143.198.122.31/bitacora/profundidad-llanta'

const txtIdprof = document.getElementById('txtIdProf')
const txtDescripcionprof = document.getElementById('txtDescProf')


function fetchProfundidadLlanta(){
    fetch(urlprof)
    .then(response => response.json())
    .then(data => loadTableDataProf(data))
  }

function fetchSaveProfundidadLlanta(){
    var data = txtDescripcionprof.value
    console.log(data)
    fetch(urlprof, {
        method: "POST",
        body: JSON.stringify({"descripcion" : data }),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => response.json()) 
      .then(json => console.log(json))
      .catch(err => console.log(err))

      txtDescripcionprof.value = ""
    fetchProfundidadLlanta()
    
}

//   fetch('http://localhost:8080/actividad')
//   .then(response => response.json())
//   .then(data => console.log(data));

//   fetch('http://localhost:8080/actividad')
//   .then(response => response.json())
//   .then(data => loadTableData(data));

  function loadTableDataProf(items){
    const table = document.getElementById('testBodyProf')
    table.innerHTML = ''
    for(item in items){
        let row = table.insertRow();
        let idProfundidad = row.insertCell(0)
        idProfundidad.innerHTML = items[item].idProfundidad 
        let descripcion = row.insertCell(1)
        descripcion.innerHTML = items[item].descripcion
        let edit = row.insertCell(2)
        edit.innerHTML = '<a class="btn btn-primary btn-lg" href="#" role="button" id="btnfind4" onclick="openModal()">Select</a>'
    }
    
}