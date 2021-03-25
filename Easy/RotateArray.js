var rotate = function(nums, k) {
  for (let i = 0; i < k; i++) {
      let val = nums.pop();
      nums.unshift(val);
  }
};