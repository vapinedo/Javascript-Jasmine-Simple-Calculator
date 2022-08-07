class ArithmeticError extends Error {
  constructor(message) {
    super(message);
    this.name = "ArithmeticError";
  }
}

class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.name = "BadRequestError";
  }
}

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
    throw new ArithmeticError(`Error trying to divide by: ${number}`);
  }
  return (this.total /= number);
};

Object.defineProperty(Calculator.prototype, "version", {
  get: function() {
    return "0.1";
  },
  configurable: true,
  enumerable: true,
});