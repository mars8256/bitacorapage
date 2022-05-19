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


const ctx = canvas.getContext('2d')
const swal = window.swal
let countClickme = 0
const width = canvas.width = window.innerWidth
const height = canvas.height = window.innerHeight

const widthTruck = canvas.width * 0.2
const heightTruck = canvas.height * 0.4

$("#canvas").outerHeight($(window).height()-$("#canvas").offset().top- Math.abs($("#canvas").outerHeight(true) - $("#canvas").outerHeight()));
    $(window).on("resize", function(){ $("#canvas").outerHeight($(window).height()-$("#canvas").offset().top- Math.abs($("#canvas").outerHeight(true) - $("#canvas").outerHeight()));
    });
