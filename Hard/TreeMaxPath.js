var maxPathSum = function(root) {
  let maxPathVal = -Infinity;

  var maxGain = function(node) {
      if (node === null) {
          return 0;
      }

      let maxLeft = Math.max(maxGain(node.left), 0);
      let maxRight = Math.max(maxGain(node.right), 0);

      let rootVal = node.val + maxLeft + maxRight;
      if (rootVal > maxPathVal) {
          maxPathVal = rootVal;
      }

      return node.val + Math.max(maxLeft, maxRight);
  }

  maxGain(root);
  return maxPathVal;
};