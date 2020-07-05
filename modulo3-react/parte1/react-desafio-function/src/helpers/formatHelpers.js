const formatter = Intl.NumberFormat("pt-BR");

function formatNumber(value) {
  return formatter.format(value);
}

function formatPorcentage(value) {
  const stringValue = value.toFixed(2);

  return stringValue.replace(".", ",") + "%";
}

export { formatNumber, formatPorcentage };
