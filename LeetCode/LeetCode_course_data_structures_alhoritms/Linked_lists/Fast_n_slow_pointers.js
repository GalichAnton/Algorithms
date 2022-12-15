//Example 1: Given the head of a linked list with an odd number of nodes head,
// return the value of the node in the middle.
// For example, given a linked list that represents 1 -> 2 -> 3 -> 4 -> 5, return 3.
const List = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: {
            val: 6,
            next: {
              val: 6,
              next: {
                val: 7,
                next: null
              }
            }
          }
        }
      }
    }
  }
}

let getMiddle = head => {
  let slow = head;
  let fast = head;


  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }


  return slow.val;
}

console.log(getMiddle(List))

// Example 2: 141. Linked List Cycle
// Given the head of a linked list, determine if the linked list has a cycle.
// There is a cycle in a linked list if there is some node in the
// list that can be reached again by continuously following the next pointer.

var hasCycle = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }

  return false;
};


//Example 3: Given the head of a linked list and an integer k, return the k^{th}k
// th node from the end.
// For example, given the linked list that represents 1 -> 2 -> 3 -> 4 -> 5 and k = 2, return the node with value 4,
// as it is the 2nd node from the end.

let findNode = (head, k) => {
  let slow = head;
  let fast = head;
  for (let i = 0; i < k; i++) {
    fast = fast.next;
  }

  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}

console.log(findNode(List, 2))

//Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.

// Example 2:
// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

var middleNode = function (head) {
  let slow = fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

console.log(middleNode(List))

//Given the head of a sorted linked list, delete all duplicates such that each element appears only once.
// Return the linked list sorted as well.
// Example 1:
// Input: head = [1,1,2]
// Output: [1,2]
// Example 2:
// Input: head = [1,1,2,3,3]
// Output: [1,2,3]

var deleteDuplicates = function(head) {
  let current = head

  while(current && current.next) {
    if(current.next.val === current.val) {
      current.next = current.next.next
    } else {
      current = current.next
    }
  }
  return head
};

console.log(deleteDuplicates(List))