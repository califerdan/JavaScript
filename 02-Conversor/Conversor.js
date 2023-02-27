const currencyInput = document.querySelector(".currencyInput");
const currencyOutput = document.querySelector(".currencyOutput");

const input = document.querySelector('.amountInput')
const output = document.querySelector('.amountOutput');

const host = "api.frankfurter.app";

document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch(`https://${host}/currencies`);
  const data = await response.json();
  Object.entries(data).forEach(([key, value]) => {
    currencyInput.innerHTML += `<option value='${key}'>${key + " - " + value}</option>`;
    currencyOutput.innerHTML += `<option value='${key}'>${key + " - " + value}</option>`;
  });
});

async function converter() {
  if (currencyInput.value !== currencyOutput.value && input.value !== 0) {
    try {
      const response = await fetch(`https://${host}/latest?amount=${input.value}&from=${currencyInput.value}&to=${currencyOutput.value}`);
      const data = await response.json();
      output.value = ` ${data.rates[currencyOutput.value]}`;
    } catch (e) {}
  } else {
    output.value = input.value;
  }
}

function readyToConvert (){
  const emptyCurrencies = currencyInput.value === 'currency1' || currencyOutput.value === 'currency2';
  return !(emptyCurrencies);
}

input.addEventListener('keyup', () => {
  readyToConvert() ? converter() : '';
})

currencyInput.addEventListener('change',() =>{
  readyToConvert() ? converter() : '';
})

currencyOutput.addEventListener('change',() =>{
  readyToConvert() ? converter() : '';
})