const getFloatDigits = (n: number) => {
  return n % 1;
};
export const randomNegativeOrPositive = () => Math.random() < 0.5 || -1;
