/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const medianIdx = Math.floor((nums1.length + nums2.length) / 2);
  const isEven = (nums1.length + nums2.length) % 2 === 0;

  if (nums2.length === 0) {
      return isEven ? ((nums1[medianIdx] + nums1[medianIdx - 1]) / 2) : nums1[medianIdx];
  }
  for (let i = 0; i < nums1.length; i++) {
      let currentNum = nums1[i];
      let placed = false;

      for (let j = 0; j < nums2.length; j++) {
          let comparer = nums2[j];

          if (currentNum <= comparer) {
              nums2.splice(j, 0, currentNum);
              placed = true;
              break;
          }
          if (!isEven && j === medianIdx) {
              return nums2[j]
          }
          if (isEven && j >= medianIdx) {
              return ((nums2[j] + nums2[j - 1]) / 2);
          }
      }

      if (!placed) {
          nums2.push(currentNum);
      }
  }
  return isEven ? ((nums2[medianIdx] + nums2[medianIdx - 1]) / 2) : nums2[medianIdx];

};