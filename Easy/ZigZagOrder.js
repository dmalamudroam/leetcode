/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var zigzagLevelOrder = function(root) {

  if (!root) {
      return [];
  }

  let result = [];

  let currentGen = [root];
  let nextGen = [];
  let reverse = false;

  while (currentGen.length > 0) {
      let currentVals = [];

      currentGen.forEach((node) => {
          currentVals.push(node.val);

          if (node.left) {
              nextGen.push(node.left);
          }

          if (node.right) {
              nextGen.push(node.right);
          }
      });

      if (reverse) {
          currentVals.reverse();
          reverse = false;
      } else {
          reverse = true;
      }
      result.push(currentVals);
      currentGen = nextGen;
      nextGen = [];
  }
  return result;

};