var swapNodes = function(head, k) {
  let leadPointer = head;
  let trailingPointer = head;

  let leadIdx = 1;

  let kthNode, kthFromEndNode;

  while (leadPointer !== null) {
      if (leadIdx === k) {
          kthNode = leadPointer;
      }
      if (leadPointer.next === null) {
          kthFromEndNode = trailingPointer;
      }

      if (leadIdx >= k) {
          trailingPointer = trailingPointer.next;
      }
      leadIdx++;
      leadPointer = leadPointer.next;
  }

  let fromStartVal = kthNode.val;
  let fromEndVal = kthFromEndNode.val;

  kthNode.val = fromEndVal;
  kthFromEndNode.val = fromStartVal;

  return head;
};