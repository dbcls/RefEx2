export const createNumberSorter = str => {
  if (!str) return;

  const chromosomePositionMap = {
    X: 23,
    Y: 24,
    MT: 25,
    '-': 26,
  };

  let order = isNaN(Number(str)) ? str : Number(str);
  if (typeof order === 'string') {
    order = order.toUpperCase();
    return chromosomePositionMap[order] || order;
  }
  return order;
};
