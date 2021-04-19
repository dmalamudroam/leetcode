// Recursive Approach
var reverseList = function(head, revHead = null) {
  if (head === null) {
      return null;
  }

  if (head.next === null) {
      head.next = revHead;
      return head;
  }

  let reverseHead = head;
  let newHead = head.next;
  head.next = revHead;

  return reverseList(newHead, reverseHead);
};

//Iterative Approach
var reverseList = function(head) {
  let prev = null;
  let curr = head;

  while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
  }

  return prev;
};