import Cliente from "./cliente.js"
export default class clienteFrecuente extends Cliente{

    constructor({nombre, direccion, telefono, ncliente, fechRegis})
    {
        super({nombre, direccion, telefono})
        this._ncliente = ncliente
        this._fechRegis = fechRegis
    }

    getPerfil()
    {
        return (`${this._ncliente}, ${this._fechRegis.getFecha()}, ${this._nombre}, ${this._direccion.getFormatoCorto()}, ${this._telefono}`)
    }
}