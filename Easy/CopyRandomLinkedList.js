/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
 var copyRandomList = function(head) {

  let clones = new Map();
  let current = head;

  while (current) {
      clones.set(current, new Node(current.val));
      current = current.next;
  }

  current = head;
  while (current) {
      clones.get(current).next = clones.get(current.next) || null;
      clones.get(current).random = clones.get(current.random) || null;
      current = current.next;
  }

  return clones.get(head);
};