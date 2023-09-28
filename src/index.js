module.exports = function toReadable(number) {
  let result = '';
  //let number = input.value;

  number = number.toString();

  const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  const tens = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens1 = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety',];

  if (number < 10) {
    result = units[number];

  } else if (number > 10 && number < 20) {
    result = tens[number - 10];
  } else if (number.length === 2 && number % 10 === 0) {
    result = tens1[number / 10];
  } else if (number.length === 2 && number % 10 !== 0) {
    result = tens1[number[0]] + ' ' + units[number % 10];
  } else if (number.length === 3 && number % 100 === 0) {
    result = units[number[0]] + ' ' + 'hundred';
  } else if (number.length === 3 && number % 10 !== 0 && number[1] == 1) {
    result = units[number[0]] + ' ' + 'hundred' + ' ' + tens[number - Math.floor(number / 10) * 10];
  } else if (number.length === 3 && number % 10 === 0) {
    result = units[number[0]] + ' ' + 'hundred' + ' ' + tens1[(number / 10) % 10];
  }
  else if (number.length === 3 && number % 10 !== 0 && number[1] >= 2) {
    result = units[number[0]] + ' ' + 'hundred' + ' ' + tens1[number[1]] + ' ' + units[number % 10];
  }
  else if (number.length === 3 && number % 100 !== 0 && number[1] == 0) {
    result = units[number[0]] + ' ' + 'hundred' + ' ' + units[number % 100];
  }
  //result = input.value;
  return result;
}
