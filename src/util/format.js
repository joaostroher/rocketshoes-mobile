export function formatPrice(price) {
  const formatted = Number(price)
    .toFixed(2)
    .replace('.', ',');
  return `R$ ${formatted}`;
}
