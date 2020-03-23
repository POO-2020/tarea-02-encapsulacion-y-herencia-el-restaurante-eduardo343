export default class Cliente{
    /**
     * 
     * @param {string} nombre 
     * @param {string} direccion 
     * @param {number} telefono 
     */
    constructor(nombre, direccion, telefono){
        this._nombres = nombre
        this._direcciones = direccion
        this._telefonos = telefono
    }
    getPerfil(){
        return `${this._nombres} ${this._direcciones.getFormatoCorto()} ${this._telefonos}`
    }
}