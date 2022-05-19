const canvas = document.querySelector('canvas')
const workArea = document.getElementById('workarea')
const clear = document.getElementById('clear')
const tipoUnidad = document.getElementById('tipoUnidad')
const numeroDePlaca = document.getElementById('numeroDePlaca')
const marcaCabezal = document.getElementById('marcaCabezal')
const exampleModal = document.getElementById('exampleModal')
const txtQuemado = document.getElementById('txtQuemado')
const cboMarca = document.getElementById('cboMarca')
const cboMedida = document.getElementById('cboMedida')
const cboActividad = document.getElementById('cboActividad')


//myModal  txtQuemado  cboMarca cboMedida cboActividad

//const btnfind = document.getElementById('btnfind')
const ctx = canvas.getContext('2d')
const swal = window.swal
let countClickme = 0
const width = canvas.width = window.innerWidth
const height = canvas.height = window.innerHeight
console.log('Hola')
console.log((canvas.width/2)-125)

const center = ((canvas.width/2)-125)
console.log(center)
const widthTruck = canvas.width * 0.25
const heightTruck = canvas.height * 0.7
console.log(widthTruck)



function Tire(tireId,axisId,x,y,width,height,numberTire,brand){
    this.tireId = tireId
    this.axisId = axisId
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.numberTire = numberTire
    this.brand = brand

}

function TireAsigned(maquinaria, quemado,posicion,marca,presion,fechainstalado,medida,diseño,aplicacion){
    this.maquinaria = maquinaria
    this.quemado = quemado
    this.posicion = posicion
    this.marca = marca
    this.presion = presion
    this.fechainstalado = fechainstalado
    this.medida = medida
    this.diseño = diseño
    this.aplicacion = aplicacion
}

function Axis(axisId,x,y,width,height){
    this.axisId = axisId
    this.x = x
    this.y = y
    this.width = width
    this.height = height
}

function Truck(visible, truckId, tipoUnidad,placa,marcaCabezal, axisNumber,tireNumber,x,y,width,height,tiresAsigned = [], axles = [], tires = [] ){
    this.visible = visible
    this.truckId = truckId
    this.tipoUnidad = tipoUnidad
    this.placa = placa
    this.marcaCabezal = marcaCabezal
    this.axisNumber = axisNumber
    this.tireNumber = tireNumber
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.tiresAsigned = tiresAsigned
    this.axles = axles
    this.tires = tires
    console.log(this.x + '--')
    console.log(this.y + '--')
    if (this.axisNumber > 0){
        for (i=1; i<= this.axisNumber; i ++){
            var xi = i
            var xx = this.x
            var xwidth = this.width
            var xheight = this.height
            var xy = this.y
            if(i === 1) {

            }
            if (i === 2){
                xy = xy + (this.height * 0.6)
            }
            if (i === 3){
                xy = xy + this.height
            }

            var axis = new Axis(xi,xx,xy,xwidth,xy)
            axles.push(axis)

            //tire axis one
            if (i === 1){
                //console.log(i+'tire axis')
                if (this.tireNumber > 0){
                    for (j = 1; j <= 2; j++){
                        //console.log(j + 'j')
                        if(j === 1) {
                            var tx = new TireAsigned()
                            //console.log(this.tiresAsigned[j-1])
                            tx = tiresAsigned[j-1]
                            var tire = new Tire(j ,
                                xi,
                                xx-(20 + ((xwidth/10) * 2)),
                                xy-((xheight/10)* 2)/2,
                                (xwidth/10) * 2,
                                (xheight/10)* 2,
                                tx.quemado,
                                tx.marca)
                              
                        }
                        if(j === 2){
                            var tx = new TireAsigned()
                            tx = tiresAsigned[j-1]
                            var tire = new Tire(j,
                                xi,
                                (xx + xwidth) + 20 ,
                                xy-((xheight/10)* 2)/2,
                                (xwidth/10) * 2,
                                (xheight/10)* 2,
                                tx.quemado,
                                tx.marca)
                        }
                        this.tires.push(tire)
                    }
                }
            }

            //tire axis two
            if(i === 2 ){
                if (this.tireNumber > 0){
                    for (j = 3; j <= 6; j++){
                        //console.log(j + 'j')
                        if(j === 3) {
                            var tx = new TireAsigned()
                            tx = tiresAsigned[j-1]
                            var tire = new Tire(j,
                                xi,
                                xx-(20 + ((xwidth/10) * 4)),
                                xy-((xheight/10)* 2)/2,(xwidth/10) * 2,
                                (xheight/10)* 2,
                                tx.quemado,
                                tx.marca)
                        }
                        if(j === 4){
                            //dont change
                            var tx = new TireAsigned()
                            tx = tiresAsigned[j-1]
                            var tire = new Tire(j,
                                xi,
                                xx-(20 + ((xwidth/10) * 2)),
                                xy-((xheight/10)* 2)/2,
                                (xwidth/10) * 2,
                                (xheight/10)* 2,
                                tx.quemado,
                                tx.marca)
                            //var tire = new Tire(j,xi,(xx + xwidth) + 20 ,xy-((xheight/10)* 2)/2,(xwidth/10) * 2,(xheight/10)* 2)
                        }
                        if(j === 5) {
                            //dont change
                            var tx = new TireAsigned()
                            tx = tiresAsigned[j-1]
                            var tire = new Tire(j,
                                xi,
                                (xx + xwidth) + 20 ,
                                xy-((xheight/10)* 2)/2,
                                (xwidth/10) * 2,
                                (xheight/10)* 2,
                                tx.quemado,
                                tx.marca)
                            //var tire = new Tire(j,xi,xx-(20 + ((xwidth/10) * 2)),xy-((xheight/10)* 2)/2,(xwidth/10) * 2,(xheight/10)* 2)
                        }
                        if(j === 6){
                            var tx = new TireAsigned()
                            tx = tiresAsigned[j-1]
                            var tire = new Tire(j,
                                xi,
                                (xx + xwidth) + 20 + ((xwidth/10) * 2) ,
                                xy-((xheight/10)* 2)/2,(xwidth/10) * 2,
                                (xheight/10)* 2,
                                tx.quemado,
                                tx.marca)
                        }
                        this.tires.push(tire)
                    }
                }
            }

            //tire axis tree
            if(i === 3 ){
                if (this.tireNumber > 0){
                    for (j = 7; j <= 10; j++){
                        //console.log(j + 'j')
                        if(j === 7) {
                            var tx = new TireAsigned()
                            tx = tiresAsigned[j-1]
                            var tire = new Tire(j,
                                xi,
                                xx-(20 + ((xwidth/10) * 4)),
                                xy-((xheight/10)* 2)/2,
                                (xwidth/10) * 2,
                                (xheight/10)* 2,
                                tx.quemado,
                                tx.marca)
                        }
                        if(j === 8){
                            //dont change
                            var tx = new TireAsigned()
                            tx = tiresAsigned[j-1]
                            var tire = new Tire(j,
                                xi,
                                xx-(20 + ((xwidth/10) * 2)),
                                xy-((xheight/10)* 2)/2,
                                (xwidth/10) * 2,
                                (xheight/10)* 2,
                                tx.quemado,
                                tx.marca)
                            //var tire = new Tire(j,xi,(xx + xwidth) + 20 ,xy-((xheight/10)* 2)/2,(xwidth/10) * 2,(xheight/10)* 2)
                        }
                        if(j === 9) {
                            //dont change
                            var tx = new TireAsigned()
                            tx = tiresAsigned[j-1]
                            var tire = new Tire(j,
                                xi,
                                (xx + xwidth) + 20 ,
                                xy-((xheight/10)* 2)/2,
                                (xwidth/10) * 2,
                                (xheight/10)* 2,
                                tx.quemado,
                                tx.marca)
                            //var tire = new Tire(j,xi,xx-(20 + ((xwidth/10) * 2)),xy-((xheight/10)* 2)/2,(xwidth/10) * 2,(xheight/10)* 2)
                        }
                        if(j === 10){
                            var tx = new TireAsigned()
                            tx = tiresAsigned[j-1]
                            //console.log(j-1)
                            console.log(tx)
                            var tire = new Tire(j,
                                xi,
                                (xx + xwidth) + 20 + ((xwidth/10) * 2) ,
                                xy-((xheight/10)* 2)/2,
                                (xwidth/10) * 2,
                                (xheight/10)* 2,
                                tx.posicion,
                                tx.marca)
                        }
                        this.tires.push(tire)
                    }
                }
            }
        }
    }



}

Tire.prototype.draw = function() {
    ctx.beginPath()
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'gray';
    //ctx.strokeRect(this.x,this.y,this.width,this.height)
    roundedRect(ctx,this.x,this.y,this.width,this.height,10)
    //console.log(this.x + '-' + this.y)
    ctx.font = '20px serif';
    ctx.fillText(this.tireId, this.x + (this.width/2), this.y - 3);
    
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 0.5;

    let iteratorRepeatLine = 0
    for(j=0;j<7;j++){
        iteratorRepeatLine = iteratorRepeatLine + 6
        let iteratorNumber = 0
        for(i=0;i<14;i++){

            iteratorNumber = iteratorNumber + 6;
            if(i%2 > 0){
                ctx.beginPath();
                ctx.moveTo(this.x + iteratorRepeatLine , this.y + iteratorNumber);
                ctx.lineTo(this.x + iteratorRepeatLine + 5, this.y + iteratorNumber + 3);
                //ctx.lineTo(this.x + 5, this.y + iteratorNumber + 5);
                ctx.closePath();
                ctx.stroke();

            }else{
                ctx.beginPath();
                ctx.moveTo(this.x + iteratorRepeatLine + 5, this.y + iteratorNumber);
                ctx.lineTo(this.x + iteratorRepeatLine , this.y + iteratorNumber + 3);
                //ctx.lineTo(this.x + 5, this.y + iteratorNumber + 5);
                ctx.closePath();
                ctx.stroke();
            }

        }
    }
}

function roundedRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.lineTo(x, y + height - radius);
    ctx.arcTo(x, y + height, x + radius, y + height, radius);
    ctx.lineTo(x + width - radius, y + height);
    ctx.arcTo(x + width, y + height, x + width, y + height-radius, radius);
    ctx.lineTo(x + width, y + radius);
    ctx.arcTo(x + width, y, x + width - radius, y, radius);
    ctx.lineTo(x + radius, y);
    ctx.arcTo(x, y, x, y + radius, radius);
    ctx.stroke();
  }

Axis.prototype.draw = function() {
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'blue';
    //console.log(this.x + this.width)
    ctx.moveTo(this.x - 20, this.y);
    ctx.lineTo(this.x + this.width + 20, this.y );
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = 'gray';
    ctx.lineWidth = 1;
    ctx.strokeRect(this.x-20,this.y-5,this.width + 20,10);
    ctx.stroke();
    ctx.fillRect(this.x-20,this.y-10,20,20);
    ctx.fillRect(this.x + this.width,this.y-10,20,20);
    ctx.closePath();
    ctx.stroke();

    // if(this.axisId != 1){
    //     ctx.beginPath();
    //     ctx.strokeStyle = 'gray';
    //     ctx.lineWidth = 1;
    //     //ctx.strokeRect(this.x + ((this.width-25)/2),this.y-25,50,50);
    //     roundedRect(ctx,this.x + ((this.width-40)/2),this.y-15,50,30,10)
    //     ctx.closePath();
    //     ctx.stroke();
    // }



}

Truck.prototype.draw = function() {
    //ctx.clearRect(thix.x,thix.y,this.width,this.height);
    ctx.lineWidth = 1;
    //make chasis
    ctx.strokeRect(this.x, this.y, this.width, this.height);
    ctx.strokeRect(this.x+10, this.y - 10, this.width-20, this.height+20);
    //make axis
    //console.log(this.axisNumber)
    for(var i = 0; i < this.axles.length; i ++){
        this.axles[i].draw()
    }
    //make tires
    //console.log('array tires' + this.tires.length)
    for(var i=0; i< this.tires.length; i++){
        this.tires[i].draw()
    }
}

// canvas.addEventListener('click', function(e) {

//     if (truck.visible){
//         for(i = 0; i<truck1.tires.length; i++){
//             if(e.x > truck1.tires[i].x && e.x < (truck1.tires[i].x + truck1.tires[i].width)){
//                 if(e.y > truck1.tires[i].y+60 && e.y < (truck1.tires[i].y+60 + truck1.tires[i].height)){
//                     //window.alert('Llanta seleccionada ' + truck1.tires[i].tireId)
//                     $("#exampleModal").modal()
//                     txtQuemado.value = truck1.tires[i].numberTire
//                     cboMarca.value = truck1.tires[i].brand
//                     //cboActividad.value = ""
//                     // swal('Posición Llanta: ' + truck1.tires[i].tireId,
//                     //       'Marca:' + truck1.tires[i].brand + 
//                     //       '\nId Llanta:' + truck1.tires[i].numberTire )
//                 }
//             }
//         }
//     } else {
//         for(i = 0; i<truck2.tires.length; i++){
//             if(e.x > truck2.tires[i].x && e.x < (truck2.tires[i].x + truck2.tires[i].width)){
//                 if(e.y > truck2.tires[i].y+60 && e.y < (truck2.tires[i].y+60 + truck2.tires[i].height)){
//                     //window.alert('Llanta seleccionada ' + truck1.tires[i].tireId)
//                     $("#exampleModal").modal()
//                     txtQuemado.value = truck2.tires[i].numberTire
//                     cboMarca.value = truck2.tires[i].brand
//                     //cboActividad = ""
//                     // swal('Posición Llanta: ' + truck2.tires[i].tireId,
//                     //       'Marca:' + truck2.tires[i].brand + '\nId Llanta:' + truck2.tires[i].numberTire )
//                 }
//             }
//         }
//     }
//   })

  //revisar si se elimina
//   workArea.addEventListener('click',function(e){
//       console.log('x:'+e.x + ' ' + 'y:'+e.y)
//   })




var arrayTires1 = []
var arrayTires2 = []

var t1 = new TireAsigned('328','46205','1','LONG MARCH','95','08/09/2020','295/75R22.5','LM216','DIRECCIÓN')
var t2 = new TireAsigned('328','46206','2','LONG MARCH','95','08/09/2020','295/75R22.5','LM216','DIRECCIÓN')
var t3 = new TireAsigned('328','46191','3','DOUBLE COIN','95','08/09/2020','295/80R22.5','RLB1','TRACCIÓN')
var t4 = new TireAsigned('328','46192','4','DOUBLE COIN','95','08/09/2020','295/80R22.5','RLB1','TRACCIÓN')
var t5 = new TireAsigned('328','46103','5','DOUBLE COIN','95','08/09/2020','295/80R22.5','RLB1','TRACCIÓN')
var t6 = new TireAsigned('328','46194','6','DOUBLE COIN','95','08/09/2020','295/80R22.5','RLB1','TRACCIÓN')
var t7 = new TireAsigned('328','45392','7','DOUBLE COIN','95','08/09/2020','295/80R22.5','RLB450','TRACCIÓN')
var t8 = new TireAsigned('328','42676','8','DOUBLE COIN','95','08/09/2020','295/80R22.5','RLB450','TRACCIÓN')
var t9 = new TireAsigned('328','45394','9','DOUBLE COIN','95','08/09/2020','295/80R22.5','RLB450','TRACCIÓN')
var t10 = new TireAsigned('328','46523','10','DOUBLE COIN','95','08/09/2020','295/80R22.5','RLB1','TRACCIÓN')
//var t10 = new TireAsigned('328','','10','','','','','','')
arrayTires1.push(t1)
arrayTires1.push(t2)
arrayTires1.push(t3)
arrayTires1.push(t4)
arrayTires1.push(t5)
arrayTires1.push(t6)
arrayTires1.push(t7)
arrayTires1.push(t8)
arrayTires1.push(t9)
arrayTires1.push(t10)


// var t21 = new TireAsigned('581','46832','1','LONG MARCH','95','16/09/2020','295/75R22.5','LM216','DIRECCIÓN')
// var t22 = new TireAsigned('581','46833','2','LONG MARCH','95','16/09/2020','295/75R22.5','LM216','DIRECCIÓN')
// var t23 = new TireAsigned('581','46092','3','LONG MARCH','95','05/08/2020','295/75R22.5','RLB1','TRACCIÓN')
// var t24 = new TireAsigned('581','46093','4','LONG MARCH','95','05/08/2020','295/75R22.5','RLB1','TRACCIÓN')
// var t25 = new TireAsigned('581','46094','5','LONG MARCH','95','05/08/2020','295/75R22.5','RLB1','TRACCIÓN')
// var t26 = new TireAsigned('581','46095','6','LONG MARCH','95','05/08/2020','295/75R22.5','RLB1','TRACCIÓN')
// var t27 = new TireAsigned('581','46096','7','LONG MARCH','95','05/08/2020','295/75R22.5','RLB450','TRACCIÓN')
// var t28 = new TireAsigned('581','46097','8','LONG MARCH','95','05/08/2020','295/75R22.5','RLB450','TRACCIÓN')
// var t29 = new TireAsigned('581','46098','9','LONG MARCH','95','05/08/2020','295/75R22.5','RLB450','TRACCIÓN')
// var t210 = new TireAsigned('581','46099','10','LONG MARCH','95','05/08/2020','295/75R22.5','RLB1','TRACCIÓN')
// arrayTires2.push(t21)
// arrayTires2.push(t22)
// arrayTires2.push(t23)
// arrayTires2.push(t24)
// arrayTires2.push(t25)
// arrayTires2.push(t26)
// arrayTires2.push(t27)
// arrayTires2.push(t28)
// arrayTires2.push(t29)
// arrayTires2.push(t210)



//tipoUnidad,placa,marcaCabezal
var truck = new Truck(
    0,
    328,
    'CABEZAL',
    '506BLG',
    'FREIGHTLINER',
    3,
    10,//llantas
    center, //x position
    heightTruck/4,//y position
    250, //widthTruck,
    450, //heightTruck,
    arrayTires1)
 
truck.draw()





// var truck2 = new Truck(
//     0,
//     581,
//     'CABEZAL',
//     '790BPP',
//     'INTERNATIONAL',
//     3,
//     10,
//     workArea.getBoundingClientRect().x + 150,
//     workArea.getBoundingClientRect().y,
//     180,//widthTruck,
//     360,//heightTruck,
//     arrayTires2)
    
//truck1.draw()


// var arrayTruks = []
// arrayTruks.push(truck1)
// arrayTruks.push(truck2)

//select = document.getElementById('truks')


// for( truck in arrayTruks) {
//     select.add(new Option(arrayTruks[truck].truckId+'-'+arrayTruks[truck].tipoUnidad+'/'+arrayTruks[truck].marcaCabezal))
// }



// function getValue(option){
    
//     var valueselected = parseInt(option.value.substring(0,3))
 
//     const result = arrayTruks.find(({truckId}) => truckId === valueselected)
    
//     tipoUnidad.value = result.tipoUnidad
//     numeroDePlaca.value = result.placa
//     marcaCabezal.value = result.marcaCabezal
//     if (valueselected === 328){
//         loadTableData(arrayTires1)
//         ctx.clearRect(0,0,canvas.width,canvas.height)
//         truck1.visible = 1
//         truck2.visible = 0
//         truck1.draw()
//     } else if(valueselected === 581) {
//         loadTableData(arrayTires2)
//         ctx.clearRect(0,0,canvas.width,canvas.height)
//         truck2.visible = 1 
//         truck1.visible = 0
//         truck2.draw()
//     }
   
//     //loadTableData([])
//     // ctx.clearRect(0,0,canvas.width,canvas.height)
//     // ctx.fillStyle = "#000000";
//     // result.draw()
// }


// function loadTableData(items){
//     const table = document.getElementById('testBody')
//     table.innerHTML = ''
//     for(item in items){
//         let row = table.insertRow();
//         let posicion = row.insertCell(0)
//         posicion.innerHTML = items[item].posicion
//         let quemado = row.insertCell(1)
//         quemado.innerHTML = items[item].quemado
//         let marca = row.insertCell(2)
//         marca.innerHTML = items[item].marca
//         let medida = row.insertCell(3)
//         medida.innerHTML = items[item].medida
//     }
    
// }



// loadTableData(arrayTires1)
//truck1.draw()