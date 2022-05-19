const url = 'http://147.182.187.126/attendance/curso'
const opts = { crossDomain: true}

const txtIdActividad = document.getElementById('txtIdActividad')
const txtDescripcionActividad = document.getElementById('txtDescripcionActividad')
const myTableActividad = document.getElementById('myTableActividad')
const txtDesc = document.getElementById('txtDesc')
const txtIdUpdate = document.getElementById('txtIdUpdate')

function fetchActividades(){
    fetch(url)
    console.log(url)
    .then(response => response.json())
    .then(data => loadTableData(data))
  }

function fetchSaveActividades(){
    var data = txtDescripcionActividad.value
    console.log(data)
    fetch(url, {
        method: "POST",
        body: JSON.stringify({"descripcion" : data }),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => response.json()) 
      .then(json => console.log(json))
      .catch(err => console.log(err))

      txtDescripcionActividad.value = ""
      fetchActividades()
    
}

function fetchUpdateActividades(){
  var des = txtDesc.value
  var id = txtIdUpdate.value
  console.log(id)
  console.log(des)
  fetch(url, {
      method: "PUT",
      body: JSON.stringify({"idActividad" : id , "descripcion" : des }),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json()) 
    .then(json => console.log(json))
    .catch(err => console.log(err))

  
  
}

  function loadTableData(items){
    console.log('entra en load data table')
    const table = document.getElementById('testBodyActividad')
    table.innerHTML = ''
    for(item in items){
        let row = table.insertRow();

        let idActividad = row.insertCell(0)
        idActividad.innerHTML = items[item].idCurso
        let descripcion = row.insertCell(1)
        descripcion.innerHTML = items[item].nombre
        let edit = row.insertCell(2)
        edit.innerHTML = '<a class="btn btn-primary btn-lg"  role="button" id="btnfind4" onclick="openModal()">Select</a>'
    }
    
}

function openModal(){
  var table = document.getElementById('myTable');
  var cells = table.getElementsByTagName('td');
  for (var i = 0; i < cells.length; i++) {
    // Take each cell
    var cell = cells[i];
    // do something on onclick event for cell
    cell.onclick = function () {
        // Get the row id where the cell exists
        var rowId = this.parentNode.rowIndex;

        var rowSelected = table.getElementsByTagName('tr')[rowId];
        //rowSelected.style.backgroundColor = "yellow";
        rowSelected.className += " selected";
        txtIdUpdate.value = rowSelected.cells[0].innerHTML
        txtDesc.value = rowSelected.cells[1].innerHTML
        
        //console.log(rowSelected.cells[0].innerHTML)
        //console.log(rowSelected.cells[1].innerHTML)

      
    }
}
   $("#exampleModal").modal()
}



