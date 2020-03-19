/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(!head||!head.next )
        return head
    let slow = head
    let fast = head.next
    

    slow.next = swapPairs(fast.next)
    fast.next = slow
    return fast
    
};