const url = 'http://143.198.122.31/bitacora/maquinaria'
//const Maquinaria = require('../model/MaquinariaModel')
const marca = document.getElementById('marcaCabezal')
const placa = document.getElementById('numeroDePlaca')

function fetchUnidades(){
    fetch(url)
    .then((response) => {
        if(response.ok) {
            return response.json()
        } else {
            console.log(response)
            throw new Error('Error: ' + response.Error)
        }
    })
    .then(data => loadDataOpt(data))
    .catch((error) =>{
        console.log(error)
    })
  }

  function loadDataOpt(items){
    //console.log(items)
    var sel = document.getElementById('unidades')
    var fragment = document.createDocumentFragment()
    for(item in items){
        var opt = document.createElement('option')
        //console.log(items[item].unidad+'-'+items[item].tipoUnidad['descripcion'])
        opt.innerHTML = items[item].unidad+'-'+items[item].tipoUnidad['descripcion']
        //opt.value = items[item].unidad+'-'+items[item].tipoUnidad['descripcion']
        opt.value = items[item].idMaquinaria
        fragment.appendChild(opt)
        
    }
    sel.appendChild(fragment)
}

function getValue(option){
    var valueselected = parseInt(option.value)
    //console.log(valueselected)
    //var maquinaria = new Maquinaria()
    fetch(url+'/'+valueselected)
    .then((response) => {
        if(response.ok) {
            return response.json()
        } else {
            console.log(response)
            throw new Error('Error: ' + response.Error)
        }
    })
    .then(data => loadDataOptSelect(data))
    // .then(data => {
    //     marca.value = data['marcaMaquinaria'].descripcion
    //     placa.value = data['placa']
    //     // console.log(data)
    //     // console.log('-----')
    //     // console.log(data['placa'])
    //     // console.log(data['marcaMaquinaria'].descripcion)
    // })
    .catch((error) =>{
        console.log(error)
    })
}

function loadDataOptSelect(item){
    marca.value = item['marcaMaquinaria'].descripcion
    placa.value = item['placa']
    fetch(url+'/llantas/'+item['idMaquinaria'])
    .then((response)=>{
        if(response.ok) {
            return response.json()
        } else {
            throw new Error('Error:' + response.Error)
        }
    })
    .then(data =>{
        const table = document.getElementById('testBody')
        table.innerHTML = ''
        //console.log(data)
        for(item in data){
            let row = table.insertRow();
            
            let posicion = row.insertCell(0)
            posicion.innerHTML = data[item].posicion
            let quemado = row.insertCell(1)
            quemado.innerHTML = data[item].quemado
            let marca = row.insertCell(2)
            marca.innerHTML = data[item].marcadescripcion
            let medida = row.insertCell(3)
            medida.innerHTML = data[item].medidaDescripcion
           
        }
    })
}