export default class Restaurante{
    constructor(nombre, telefono, direccion){
        this._nombres = nombre
        this._telefonos = telefono
        this._direcciones = direccion
        this._productos = Array()
        this._pedidos = Array()
    }
    registrarProducto(producto){
        this._productos.push(producto)
    }
    registrarPedido(pedido){
        this._pedidos.push(pedido)
    }

    listarProductos(){
        this._productos.forEach( (producto) => {
            console.log(producto.getDescripcion())
        })
    }
    listarPedidos(){
        this._pedidos.forEach( (pedido, i) => {
            console.log(`Numero.- ${i+1} - ${pedido.getResumen()}`)
        })
    }

    buscarPedido(pedido){
        let buscar = this._pedidos.find(encontarPedido => encontarPedido._esIgualA(pedido))
        if(buscar == undefined){return null}
        else {return buscar}
    }

    eliminarPedido(pedido){
        let encontrar =  this.buscarPedido(pedido)
        if(encontrar == null) return false
        else {
        let i = this._pedidos.indexOf(encontrar)
        this._pedidos.splice(i,1)
        return true
        }
    }

    modificarPedido(pedido, nuevoPedido){
        let encontrar =  this.buscarPedido(pedido)
        if(encontrar == null) return false
        else {
        let i = this._pedidos.indexOf(encontrar)
        this._pedidos[i] = nuevoPedido
        return true
        }
    }
}