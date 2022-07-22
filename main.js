document.getElementById("inputValue").addEventListener("change", calculate);

function calculate(event) {
  const inputValue = event.target.value;
  const regExp = /\+|\-|\*|\//gm;
//   const numberA;
//   const numberB;
//   const operator;
  console.log({ inputValue });
}
