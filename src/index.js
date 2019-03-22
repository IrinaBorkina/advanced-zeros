module.exports = function getZerosCount(number, base) {

  let primeNumber = [];
  let maxPrime = 0;
  let sqrt = 0;

  primeNumber:
  for (let i = 2; i < 256; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue primeNumber;
    }
    primeNumber.push(i);
  }

  for (let i = 0; primeNumber[i] <= base; i++) {
    if (base % primeNumber[i] == 0) {
      maxPrime = primeNumber[i];
    }
  }

  while (base % maxPrime == 0) {
    sqrt++;
    base /= maxPrime;
  }

  let countZero = 0;
  while (number > 0) {
    number = Math.floor(number / maxPrime);
    countZero += number;
  }

  let zero = Math.floor(countZero / sqrt);
  return zero;
}