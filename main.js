if (document.getElementById("inputValue") !== null) {
  document
    .getElementById("inputValue")
    .addEventListener("change", function (event) {
      calculate(event.target.value);
    });
}

function calculate(value) {
  const inputValue = value;
  const regExp = /\+|\-|\*|\//gm;

  const numberList = inputValue.split(regExp);
  const numberA = Number(numberList[0]);
  const numberB = Number(numberList[1]);
  const operation = inputValue.match(regExp);

  if (isNaN(numberA) || isNaN(numberB) || operation === null) {
    updateResult("Expression not recognized");
    return;
  }

  const operator = operation[0];
  const calculator = new Calculator();
  calculator.add(numberA);

  let result;
  switch (operator) {
    case "+":
      result = calculator.add(numberB);
      break;

    case "-":
      result = calculator.subtract(numberB);
      break;

    case "*":
      result = calculator.multiply(numberB);
      break;

    case "/":
      result = calculator.divide(numberB);
      break;
  }

  updateResult(result);
}

function updateResult(result) {
  const element = document.getElementById("result");
  if (element !== null) {
    element.innerText = result;
  }
}

function showVersion() {
  const calculator = new Calculator();
  const element = document.getElementById("version");
  if (element !== null) {
    calculator.version.then(function(version) {
      element.innerText =  version;
    });
  }
}
