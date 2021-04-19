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