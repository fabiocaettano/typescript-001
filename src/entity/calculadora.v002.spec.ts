import Calculadora from "./calculadora.v002";

describe("Testar Calculadora v002", () => {
    it("Testar o tipo 1", () => {
        let calculadora = new Calculadora();
        expect(calculadora.somarDoisNumerosTipo1(5,5)).toEqual(10);
    });

    it("Testar o tipo 2, com dois parametros",() => {
        let calculadora = new Calculadora();
        expect(calculadora.somaDoisNumberosTipo2({first: 10,second: 10})).toEqual(20);
    });

    it("Testar o tipo 2, com três parametros",() => {
        let calculadora = new Calculadora();
        expect(calculadora.somaDoisNumberosTipo2({first: 10,second: 10, third: 10})).toEqual(30);
    });
});