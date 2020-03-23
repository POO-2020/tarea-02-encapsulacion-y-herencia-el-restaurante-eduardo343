export default class Tiempo{
    constructor(hora, minuto, periodo){
        this._horas = hora
        this._minutos = minuto
        this._periodos = periodo
        
        console.log("Elemento iniciaizado")
    }
    getFormato12(){
        return  `${this._horas}:${this._minutos} ${this._periodos}`
    }
    getFormato24(){
        let hora24
        let suma  
        let resta
        if( (this._horas == 12)&&(this._periodos == "AM") ){
            resta = this._horas - 12
            hora24 = resta
        }else if( (this._horas >= 1)&&(this._periodos == "PM")){
            suma = this._horas + 12
            hora24 = suma
        }else{
            return `${this._horas}:${this._minutos} ${this._periodos}`
        }
        return `${hora24}:${this._minutos} ${this._periodos}`
    }
}