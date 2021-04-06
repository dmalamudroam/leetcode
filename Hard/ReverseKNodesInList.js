var reverse = function(head, revHead, count, k) {
  if (head === null || count === k) {
      return revHead;
  } else {
      let newHead = head.next;
      head.next = revHead;
      revHead = head;
      count++;
      return reverse(newHead, revHead, count, k);
  }
}
var reverseKGroup = function(head, k) {
  let counter = 0;
  let pointer = head;

  while (counter < k && pointer !== null) {
      counter++;
      pointer = pointer.next;
  }

  if (counter === k) {
      let revHead = reverse(head, null, 0, k);
      head.next = reverseKGroup(pointer, k);
      return revHead;
  }

  return head;
};