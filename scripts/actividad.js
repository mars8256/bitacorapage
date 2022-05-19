const url = 'http://147.182.187.126/attendance/curso'
const opts = { crossDomain: true}

const txtIdActividad = document.getElementById('txtIdActividad')
const txtDescripcionActividad = document.getElementById('txtDescripcionActividad')
const myTableActividad = document.getElementById('myTableActividad')
const txtDesc = document.getElementById('txtDesc')
const txtIdUpdate = document.getElementById('txtIdUpdate')
const txtCre = document.getElementById('txtCre')

function fetchActividades(){
    console.log($("#txtIdActividad").val())
    console.log(url)

    console.log(url + "/" + $("#txtIdActividad").val() )

    fetch(url + "/" + $("#txtIdActividad").val())
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
  console.log($("#txtIdUpdate").val())

  var des = $("#txtDesc").val()
  var id = $("#txtIdUpdate").val()
  var cre = $("#txtCre").val()
  console.log(id)
  console.log(des)
  fetch(url, {
      method: "PUT",
      body: JSON.stringify({"idCurso" : id , "nombre" : des , "creditos":cre }),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json()) 
    .then(json => console.log(json))
    .catch(err => console.log(err))

  
  
}

  function loadTableData(items){
    console.log('entra en load data table')
    const table = document.getElementById('testBodyActividad')
    console.log(items)
    table.innerHTML = ''
    console.log(Object.keys(items).length)
    if(Object.keys(items).length < 4){
      let row = table.insertRow();
      let idActividad = row.insertCell(0)
      idActividad.innerHTML = items.idCurso
      let descripcion = row.insertCell(1)
      descripcion.innerHTML = items.nombre
      let creditos = row.insertCell(2)
      creditos.innerHTML = items.creditos
      let edit = row.insertCell(3)
      edit.innerHTML = '<a class="btn btn-primary btn-lg"  role="button" id="btnfind4" onclick="openModal()">Select</a>'

    }else {
      for(item in items){
        console.log(items[item].idCurso)
        let row = table.insertRow();
        
        let idActividad = row.insertCell(0)
        idActividad.innerHTML = items[item].idCurso
        let descripcion = row.insertCell(1)
        descripcion.innerHTML = items[item].nombre
        let creditos = row.insertCell(2)
        creditos.innerHTML = items[item].creditos
        let edit = row.insertCell(3)
        edit.innerHTML = '<a class="btn btn-primary btn-lg"  role="button" id="btnfind4" onclick="openModal()">Select</a>'
    }
    }
    
    
}

function openModal(){
  console.log('entra en función')
  var table = document.getElementById('testBodyActividad');
  console.log(table)
  var cells = table.getElementsByTagName('td');
  for (var i = 0; i < cells.length; i++) {
    // Take each cell
    var cell = cells[i];
    // do something on onclick event for cell
    cell.onclick = function () {
        // Get the row id where the cell exists
        
        var rowId = this.parentNode.rowIndex-1;
        console.log("print row id")
        console.log(rowId)
        var rowSelected = table.getElementsByTagName('tr')[rowId];
        console.log(rowSelected)
        console.log(rowSelected.cells[0].innerHTML)

      
        $("#txtIdUpdate").val(rowSelected.cells[0].innerHTML)
        $("#txtDesc").val(rowSelected.cells[1].innerHTML)
        $("#txtCre").val(rowSelected.cells[2].innerHTML)
        rowSelected.className += " selected";
       
        //txtDesc.value = rowSelected.cells[1].innerHTML
        
        //console.log(rowSelected.cells[0].innerHTML)
        //console.log(rowSelected.cells[1].innerHTML)

      
    }
}
   $("#exampleModal").modal()
}



