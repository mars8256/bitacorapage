const TipoUnidad = require('./TipoUnidadModel')
const MarcaMaquinaria = require('./MarcaMaquinariaModel')

function Maquinaria(idMaquinaria, unidad, placa, numeroLlanta, marcaMaquinaria, tipoUnidad){
    this.idMaquinaria = idMaquinaria
    this.unidad = unidad
    this.placa = placa
    this.numeroLlanta = numeroLlanta
    this.marcaMaquinaria = marcaMaquinaria
    this.tipoUnidad = tipoUnidad
}

module.exports = {Maquinaria, TipoUnidad, MarcaMaquinaria}
