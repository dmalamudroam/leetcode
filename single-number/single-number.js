/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let a = 0;
    nums.forEach((num) => {
        a ^= num;
    });
    return a;
};