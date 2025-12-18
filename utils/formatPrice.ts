// buat list villa

export const formatPrice = (price: number) => {
  if (price >= 1000000) {
    const juta = price / 1000000;
    return `Rp ${juta.toFixed(1).replace('.', ',')} juta`;
  }
  return `Rp ${price.toLocaleString('id-ID')}`;
};