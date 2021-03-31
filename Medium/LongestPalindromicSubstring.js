// Initial Solution
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

// Expand from center
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
      let length1 = expand(s, i, i);
      let length2 = expand(s, i, i + 1);
      let length = Math.max(length1, length2);
      if (length > end - start) {
          start = i - Math.floor((length - 1) / 2);
          end = i + Math.floor(length / 2);
      }

  }
  return s.substring(start, end + 1);
};

var expand = function(s, left, right) {
 while(left >= 0 && right < s.length && s[left] === s[right]) {
     left--;
     right++;
 }

  return right - left - 1;
}