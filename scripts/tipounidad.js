const API_URL = 'http://143.198.122.31/bitacora/tipo-unidad/'
const opts = { crossDomain: true}

const txtId = document.getElementById('txtId')
const txtDescripcion = document.getElementById('txtDescripcion')
const myTable = document.getElementById('myTable')

function gettUrl(){
    var id = txtId.value
    if (id == null) {
        return API_URL
    } else {
        console.log(API_URL+'/'+id)
        return API_URL+'/'+id
    }
}


function fetchUnidades(){
    fetch(gettUrl())
    .then((response) => {
        if(response.ok) {
            return response.json()
        } else {
            console.log(response)
            throw new Error('Error: ' + response.Error)
        }
    })
    .then(data => loadTableData(data))
    .catch((error) =>{
        console.log(error)
    })
  }

function fetchSaveUnidades(){
    var data = txtDescripcion.value
    console.log(data)
    fetch(API_URL, {
        method: "POST",
        body: JSON.stringify({"descripcion" : data }),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => response.json()) 
      .then(json => console.log(json))
      .catch(err => console.log(err))

    txtDescripcion.value = ""
    fetchUnidades()
    
}

  function loadTableData(items){
    console.log('loadTableData')
    console.log(Array.isArray(items))
    const table = document.getElementById('testBody')
    table.innerHTML = ''
    if (Array.isArray(items)) {
        for(item in items){
            let row = table.insertRow();
            let idTipoUnidad = row.insertCell(0)
            idTipoUnidad.innerHTML = items[item].idTipoUnidad
            let descripcion = row.insertCell(1)
            descripcion.innerHTML = items[item].descripcion
            
        }
    } else {
        let row = table.insertRow();
        console.log(items['idTipoUnidad'])
            let idTipoUnidad = row.insertCell(0)
            idTipoUnidad.innerHTML = items['idTipoUnidad']
            let descripcion = row.insertCell(1)
            descripcion.innerHTML = items['descripcion']
    }
    
    
    
}

