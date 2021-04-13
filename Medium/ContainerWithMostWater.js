var maxArea = function(height) {
  let right = height.length - 1;
  let left = 0;
  let maxArea = 0;

  while (left < right) {
      let shorter = Math.min(height[left], height[right]);
      maxArea = Math.max((right - left) * shorter, maxArea);

      if (height[left] < height[right]) {
          left++;
      } else {
          right--;
      }
  }
  return maxArea;
};