//Return the indices of the 2 numbers within the array that sum to the target

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//Initial Solution
//O of N squared time
// var twoSum = function(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//       for (let j = i + 1; j < nums.length; j++) {
//           if (nums[i] + nums[j] === target) {
//               return [i, j];
//           }
//       }
//   }
// };

//Optimized Solution
//O of N time
var twoSum = function (nums, target) {
  let hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    if (hashMap[nums[i]] !== undefined) {
        return [hashMap[nums[i]], i];
    }
    let complement = target - nums[i];
    hashMap[complement] = i;
  }
}