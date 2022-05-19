const API_URL = 'http://143.198.122.31/bitacora/marca'


const txtDescripcionMarcaLlanta = document.getElementById('txtDescripcionMarcaLlanta')
const myTableMarcaLlanta = document.getElementById('myTableMarcaLlanta')
const btnFindMarcaLlanta = document.getElementById('btnFindMarcaLlanta')


function fetchMarcaLlanta(){
  fetch(API_URL)
  .then((response) => {
      if(response.ok) {
          return response.json()
      } else {
          console.log(response)
          throw new Error('Error: ' + response.Error)
      }
  })
  .then(data => loadTableDataMarca(data))
  .catch((error) =>{
      console.log(error)
  })
  }

function fetchSaveMarcaLlanta(){
    var data = txtDescripcionMarcaLlanta.value
    console.log(data)
    fetch(API_URL, {
        method: "POST",
        body: JSON.stringify({"descripcion" : data }),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => response.json()) 
      .then(json => console.log(json))
      .catch(err => console.log(err))

      txtDescripcionMarcaLlanta.value = ""
    fetchActividades()
    
}


  function loadTableDataMarca(items){
    const table = document.getElementById('testBodyMacaLlanta')
    table.innerHTML = ''
    if (Array.isArray(items)) {
      for(item in items){
        
        let row = table.insertRow();
        let idMarca = row.insertCell(0)
        idMarca.innerHTML = items[item].idMarca
        let descripcion = row.insertCell(1)
        descripcion.innerHTML = items[item].descripcion
        let edit = row.insertCell(2)
        edit.innerHTML = '<a class="btn btn-primary btn-lg" href="#" role="button" id="btnfind4" onclick="openModal()">Select</a>'
      }
    } else {
      let row = table.insertRow();
      let idMarca = row.insertCell(0)
      idMarca.innerHTML = items['idMarca']
      let descripcion = row.insertCell(1)
      descripcion.innerHTML = items['descripcion']
      let edit = row.insertCell(2)
      edit.innerHTML = '<a class="btn btn-primary btn-lg" href="#" role="button" id="btnfind4" onclick="openModal()">Select</a>'
    }
   
}





