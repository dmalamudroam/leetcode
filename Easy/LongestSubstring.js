/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let hashMap = {};
  let max = 0;
  let current = 0;

  for (let i = 0; i < s.length; i++) {
      if (hashMap[s[i]] !== undefined) {
          i = hashMap[s[i]];
          hashMap = {};
          if (current > max) {
              max = current;
          }
          current = 0;
      } else {
          hashMap[s[i]] = i;
          current++;
      }
  }
  if (current > max) {
      max = current;
  }
  return max;
};