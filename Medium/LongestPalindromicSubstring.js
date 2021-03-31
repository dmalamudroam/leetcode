/**
 * @param {string} s
 * @return {string}
 */
var isPalindrome = function(s) {
  if (s.length <= 1) {
      return true;
  }

  if (s[0] === s[s.length - 1]) {
      let substring = s.substring(1, s.length - 1);
      return isPalindrome(substring);
  } else {
      return false;
  }
}

var longestPalindrome = function(s) {

  let currentGen = [['l',s]];
  let nextGen = [];

  while(currentGen.length > 0) {

      for (let i =  0; i < currentGen.length; i++) {
          let tuple = currentGen[i];
          let subString = tuple[1];
          if (isPalindrome(subString)) {
              return subString;

          } else if (tuple[0] === 'l'){
              nextGen.push(['l',subString.substring(0, subString.length - 1)]);
              nextGen.push(['r',subString.substring(1)]);

          } else {
              nextGen.push(['r',subString.substring(1)]);
          }
      }

      currentGen = nextGen;
      nextGen = [];
  }
};