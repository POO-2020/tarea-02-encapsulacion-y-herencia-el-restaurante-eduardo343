export default class Producto{
    constructor(nombre, precio){
        this._nombres = nombre
        this._precios = precio
    }
    getDescripcion(){
        return `${this._nombres} ${this._precios.getPrecio()}`
    }

    getNombre(){
        return this._nombres
    }

    getPrecio(){
        return this._precios.getValor()
    }
}