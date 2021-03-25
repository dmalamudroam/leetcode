//initial solution
var removeDuplicates = function(nums) {
  nums.forEach((num, idx) => {
     while (num === nums[idx + 1]) {
         nums.splice(idx + 1, 1);
     }
  });
  return nums.length;
};