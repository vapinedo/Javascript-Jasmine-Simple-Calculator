function Calculator() {
  this.total = 0;
}

Calculator.prototype.add = function (number) {
  return (this.total += number);
};

Calculator.prototype.subtract = function (number) {
  return (this.total -= number);
};

Calculator.prototype.multiply = function (number) {
  return (this.total *= number);
};

Calculator.prototype.divide = function (number) {
  const blackList = [0, -0, null, undefined, NaN];
  if (blackList.includes(number)) {
    throw new Error(`Error trying to divide by: ${number}`);
  }
  return (this.total /= number);
};
