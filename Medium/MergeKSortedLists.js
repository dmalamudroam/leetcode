/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var merge2Lists = function(l1, l2) {
  if (l1 === null) {
      return l2;
  }
  if (l2 === null) {
      return l1;
  }
  if (l1.val < l2.val) {
      l1.next = merge2Lists(l1.next, l2);
      return l1;
  } else {
      l2.next = merge2Lists(l1, l2.next);
      return l2;
  }
}

var mergeKLists = function(lists) {
  if (lists.length === 0) {
      return null;
  }

  while(lists.length > 1) {
      let list1 = lists.shift();
      let list2 = lists.shift();
      lists.push(merge2Lists(list1, list2));
  }
  return lists[0];
};