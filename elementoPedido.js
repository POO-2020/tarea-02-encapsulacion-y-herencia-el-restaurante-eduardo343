import Precio from "./precio.js"
export default class elementoPedido{
    /**
     * 
     * @param {string} producto 
     * @param {number} cantidad 
     */
    constructor(producto, cantidad){
        this._productos = producto
        this._cantidades = cantidad
    }
    getPrecio(){
        return this._productos.getPrecio()
    }

    getCantidad(){
        return this._cantidades
    }

    getDescripcion(){
        let total = (this._cantidades * this._productos.getPrecio())
        total = new Precio (total)
        return(`${this._cantidades} X ${this._productos.getNombre()} ${total.getPrecio()}`)
    }
}