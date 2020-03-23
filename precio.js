export default class Precio{
    constructor(valor){
        this._valores = valor
    }
    getPrecio(){
        return `$${parseFloat(this._valores)}`
    }

    getValor(){
        return this._valores
    }
}