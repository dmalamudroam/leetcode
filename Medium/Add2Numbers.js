/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

  let resultHead;
  let currentNode;

  let sum = 0;
  let carry = 0;

  let pointer1 = l1;
  let pointer2 = l2;

  while (pointer1 !== null || pointer2 !== null) {
    let val1 = (pointer1 === null ? 0 : pointer1.val);
    let val2 = (pointer2 === null ? 0 : pointer2.val);

    sum = (val1 + val2 + carry);
    carry = (sum >= 10 ? 1 : 0);
    sum = sum % 10;

    pointer1 = (pointer1 === null ? null : pointer1.next);
    pointer2 = (pointer2 === null ? null : pointer2.next);

    let newNode = {
        val: sum,
        next: null
    };

    if (resultHead === undefined) {
        resultHead = newNode;
        currentNode = resultHead;
    } else {
      currentNode.next = newNode;
      currentNode = currentNode.next;
    }


  }

  if (carry === 1) {
      currentNode.next = {
          val: 1,
          next: null
      };
  }
  return resultHead;
};