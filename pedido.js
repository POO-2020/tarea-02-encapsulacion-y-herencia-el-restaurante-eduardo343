import Precio from "./precio.js"
import Fecha from "./fecha.js"

export default class Pedido{
    constructor({fecha, hora, cliente, npedido}){
        this._fechas = fecha
        this._horas = hora
        this._clientes = cliente
        this._npedido = npedido
        this._elementoPedidos = Array()
    }

    agregarElemento(elemento){
        this._elementoPedidos.push(elemento)
    }

    getNumeroProductos(){
        let productos = 0;
        this._elementoPedidos.forEach((elemento, i) => {
            productos = productos + elemento.getCantidad()
        })
        return `${productos}`
    }

    getCostoTotal(){
        let a = 0
        this._elementoPedidos.forEach((elemento) => {
            a = (a + (elemento.getPrecio() * elemento.getCantidad()))
        })
        a = new Precio(a)
        return `${a.getPrecio()}`
    }

    listarElemeto(){
        this._elementoPedidos.forEach((elemento, i) => {
            console.log(`(${i + 1}) - ${elemento.getDescripcion()}`)
        })
    }

    getNumeroElementos(){
        let array = Array()
        this._elementoPedidos.forEach((elemento, i) => {
        array[i] = elemento[i]
        })
        return `${array.length}`
    }

    getResumen(){
        return `${this._fechas.getFecha()} ${this._horas.getFormato12()} - ${this.getNumeroElementos()} elementos con ${this.getNumeroProductos()} productos - total ${this.getCostoTotal()}`;
    }

    getNumeroPedido(){
        return this._npedido
    }

    _esIgualA(pedido){
        if(pedido.getNumeroPedido() == this._npedido){ return true}
        else {return false}
    }

}