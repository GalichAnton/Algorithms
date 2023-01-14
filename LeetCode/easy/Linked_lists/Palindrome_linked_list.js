// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

// Example 1:
// Input: head = [1,2,2,1]
// Output: true

// Example 2:
// Input: head = [1,2]
// Output: false

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function(head) {
  let fast = head
  let slow = head

  while(fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }

  let prev = null
  while(slow) {
    let tmp = slow.next
    slow.next = prev
    prev = slow
    slow = tmp
  }

  let left = head
  let right = prev

  while(right) {
    if(left.val !== right.val) {
      return false
    }
    left = left.next
    right = right.next
  }

  return true
};