var global
export default class Fecha{
    /**
     * 
     * @param {number} dia 
     * @param {number} mes 
     * @param {number} año 
     */
    
    constructor(fecha){
        this._fechas = fecha

        this._diasSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]

        this._años = ["Enero","Febrero","Marzo", "Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
       
    }
    getAños(){
        let añosTranscurridos 
        añosTranscurridos = 2020 - this._fechas.getFullYear() 
        global = añosTranscurridos
        return añosTranscurridos
    }
    getMeses(){
        let mesesTranscurridos
        mesesTranscurridos = global * 12
        global = mesesTranscurridos
        return mesesTranscurridos
    }
    getSemanas(){
        let semanasTranscurridas 
        semanasTranscurridas = global * 4
        global = semanasTranscurridas
        return semanasTranscurridas
    }
    getDias(){
        let diasTrasncurridos
        diasTrasncurridos = global * 7
        global = diasTrasncurridos
        return diasTrasncurridos
    }

    getFecha(){
        let mesDelAño
        mesDelAño = this._años[this._fechas.getMonth()]
        return `${this._fechas.getDate()}/${mesDelAño}/${this._fechas.getFullYear()}`
    }

    getDiaFecha(){
        let diaDeSemana
        diaDeSemana = this._diasSemana[this._fechas.getDay()]
        return `${diaDeSemana}`
    }
}