export default class Calculadora{        

    constructor(){        
    }

    somarDoisNumerosTipo1(v1: number, v2: number): number{
        return v1 + v2;
    }

    somaDoisNumberosTipo2 = (params: {first: number , second: number, third?: number }) => {

        if (params.third){
            return params.first + params.second + params.third;
        }else{
            return params.first + params.second;
        }
        
    }
}