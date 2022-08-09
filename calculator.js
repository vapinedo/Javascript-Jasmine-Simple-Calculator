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
  get: function () {
    return fetch(
      "https://gist.githubusercontent.com/vapinedo/b9dfdf0e93986868791ebb98a69cf97e/raw/caae870a4efbff04330003c9a7aac791c184df33/version.json"
    ).then(function (response) {
      return response.json();
    })
    .then(function(data) {
      return data.version;
    }); 
  },
  configurable: true,
  enumerable: true,
});
