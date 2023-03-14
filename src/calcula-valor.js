function calcularMontante(capital, taxa, periodo) {
  const montante = capital * Math.pow(1 + taxa, periodo - 1);
  return arrendondar(montante);
}

function arrendondar(valor) {
  const precisao = 100;
  const arrendondado =
    Math.round((valor + Number.EPSILON) * precisao) / precisao;
  return arrendondado;
}

module.exports = {
  calcularMontante,
  arrendondar,
};
