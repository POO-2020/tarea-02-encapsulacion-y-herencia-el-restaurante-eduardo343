export default class Direccion{
    /**
     * 
     * @param {string} calle 
     * @param {number} numeroExterior 
     * @param {number} numeroInterior 
     * @param {string} colonia 
     * @param {number} codigoPostal 
     * @param {string} ciudad 
     * @param {string} municipio 
     */
    constructor(calle, numeroExterior, numeroInterior, colonia, codigoPostal, ciudad, municipio){
        this._calles = calle
        this._numerosExterior = numeroExterior
        this._numerosInterior = numeroInterior
        this._colonias = colonia
        this._codigosPostal = codigoPostal
        this._ciudades = ciudad
        this._municipios = municipio

        console.log(`Objeto Inicializado`)
    }
    getFormatoCorto(){
        return `${this._calles} ${this._numerosExterior}`
    }
    getFormatoExtendido(){
        return `${this._calles} ${this._numerosExterior} ${this._numerosInterior} ${this._colonias} ${this._codigosPostal} ${this._ciudades} ${this._municipios}`
    }
}