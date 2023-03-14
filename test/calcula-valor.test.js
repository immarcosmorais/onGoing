const calculaValor = require("../src/calcula-valor");

describe("calcularMontante", () => {
  test("Com uma prestacao o montante deve ser igual ao capital", () => {
    // Operacao
    const montante = calculaValor.calcularMontante(100, 0.0175, 1);
    // Resultado ou comportamento esperado
    expect(montante).toBe(100);
  });

  test("Com 4 prestacoes o montante é acrescido de juros", () => {
    // Operacao
    const montante = calculaValor.calcularMontante(500, 0.025, 4);
    // Resultado ou comportamento esperado
    expect(montante).toBe(538.45);
  });
});

describe("arrendondar", () => {
  test("Arrendondar em 2 casas decimais", () => {
    // Operacao
    const resultado = calculaValor.arrendondar(538.4453124999998);
    // Resultado ou comportamento esperado
    expect(resultado).toBe(538.45);
  });

  test("1.005 deve retormar 1.01", () => {
    // Operacao
    const resultado = calculaValor.arrendondar(1.005);
    // Resultado ou comportamento esperado
    expect(resultado).toBe(1.01);
  });
});
