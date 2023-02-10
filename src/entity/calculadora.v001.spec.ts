import Calculadora from "./calculadora.v001";

describe("Testar Calculadora v001", () => {
    
    it("Validar Soma", () => {
        const calculadora = new Calculadora(2,3,"+");
        expect(calculadora.operacao()).toEqual(5);
    });

    it("Validar Subtração", () => {
        const calculadora = new Calculadora(2,3,"-");
        expect(calculadora.operacao()).toEqual(-1);
    });

    it("Validar Multiplicação", () => {
        const calculadora = new Calculadora(2,3,"*");
        expect(calculadora.operacao()).toEqual(6);
    });

    it("Validar Divisão", () => {
        const calculadora = new Calculadora(2,3,"/");
        expect(calculadora.operacao()).toEqual(0.6666666666666666);
    });

    it("Validar Divisão por zero", () => {        
        expect(() => {
            const calculadora = new Calculadora(2,0,"/");
            calculadora.operacao();
        }).toThrowError("Não é possivel dividir por zero");
    });

    it("Zero dividido por qualquer número é igual a 0", () => {
        const calculadora = new Calculadora(0,5,"/");
        expect(calculadora.operacao()).toEqual(0);
    });

    it("Zero dividido por zero tem resultado indefinido", () => {        
        expect(() => {
            const calculadora = new Calculadora(0,0,"/");
            calculadora.operacao();
        }).toThrowError("Resultado Indefinido");
    });
    
    
});