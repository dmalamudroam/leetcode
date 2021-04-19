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
 var levelOrder = function(root) {

  if (!root) {
      return [];
  }

  let result = [];
  let currentGen = [root];
  let nextGen = [];

  while (currentGen.length > 0) {

      let genValues = [];

      currentGen.forEach((node) => {
          genValues.push(node.val);
          if (node.left) {
              nextGen.push(node.left);
          }
          if (node.right) {
              nextGen.push(node.right);
          }
      });

      result.push(genValues);
      currentGen = nextGen;
      nextGen = [];
  }

  return result;
};