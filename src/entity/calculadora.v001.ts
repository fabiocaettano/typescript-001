export default class Calculadora {    

    private _v1: number;
    private _v2: number;
    private _operator: string;
    private _result!: number;
    private _error!: string;

    constructor(v1: number, v2: number, operator: string){
        this._v1 = v1;
        this._v2 = v2;
        this._operator = operator;                
    }

    validate(): boolean{
        
        let validar = true;
        
        if ((this._operator === "/") && this._v2 === 0){
            validar = false;
            this._error = "Não é possivel dividir por zero";            
        }

        if ((this._operator === "/") && this._v1 === 0 && this._v2 === 0){
            validar = false;
            this._error = "Resultado Indefinido";
        }        

        return validar;
    }

    operacao(): number{
        
        if (!this.validate())
            throw new Error(this._error);       

        
        switch(this._operator){
            
            case "+":                
                this._result = this._v1 + this._v2;
            break;

            case "-":
                this._result = this._v1 - this._v2;
            break;

            case "*":
                this._result = this._v1 * this._v2;
            break;

            case "/":
                this._result = this._v1 / this._v2;                                
            break;
        }               

        return this._result;
    }        

    get operator(): string{
        return this._operator;
    }

    toString(){
        return this._v1 + ' ' + this._operator + ' ' + this._v2 + ' = ' + this._result;
    }
}