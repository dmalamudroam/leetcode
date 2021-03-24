//Initial Solution
var reverse = function(x) {
  var isNeg = x < 0;
  var result = '';
  var absValue = Math.abs(x);
  while (absValue > 0) {
      result += absValue % 10;
      absValue = Math.floor(absValue / 10);
  }

  var numberResult = Number(result);
  if (isNeg) {
      numberResult *= -1;
  }
  if (numberResult > (2 ** 31) - 1 || numberResult < -(2 ** 31)) {
      return 0;
  }
  return numberResult;
};