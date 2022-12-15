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

let reverseList = head => {
  let prev = null;
  let curr = head;
  while (curr) {
    let nextNode = curr.next; // first, make sure we don't lose the next node
    curr.next = prev;         // reverse the direction of the pointer
    prev = curr;              // set the current node to prev for the next node
    curr = nextNode;          // move on
  }

  return prev;
}

// console.log(reverseList(List))

//Example: 24. Swap Nodes in Pairs
// Given the head of a linked list, swap every pair of nodes. For example,
// given a linked list 1 -> 2 -> 3 -> 4 -> 5 -> 6, return a linked list 2 -> 1 -> 4 -> 3 -> 6 -> 5.

var swapPairs = function (head) {
  // Check edge case: linked list has 0 or 1 nodes, just return
  if (!head || !head.next) {
    return head;
  }

  let dummy = head.next;              // Step 5
  let prev = null;                    // Initialize for step 3
  while (head && head.next) {
    if (prev) {
      prev.next = head.next;      // Step 4
    }
    prev = head;                    // Step 3

    let nextNode = head.next.next;  // Step 2
    head.next.next = head;          // Step 1

    head.next = nextNode;           // Step 6
    head = nextNode;                // Move onto the next pair
  }

  return dummy;
};

//console.log(swapPairs(List))

//In a linked list of size n, where n is even, the ith node (0-indexed) of the linked list is known as the twin of the (n-1-i)th node, if 0 <= i <= (n / 2) - 1.
// For example, if n = 4, then node 0 is the twin of node 3, and node 1 is the twin of node 2. These are the only nodes with twins for n = 4.
// The twin sum is defined as the sum of a node and its twin.
// Given the head of a linked list with even length, return the maximum twin sum of the linked list.


// Example 1:
// Input: head = [5,4,2,1]
// Output: 6
// Explanation:
// Nodes 0 and 1 are the twins of nodes 3 and 2, respectively. All have twin sum = 6.
// There are no other nodes with twins in the linked list.
// Thus, the maximum twin sum of the linked list is 6.


var pairSum = function (head) {
  let length = 0
  let node = head

  while (node) {
    node = node.next
    length++
  }

  let curr = head
  let map = {}
  let max = -Infinity
  let i = 0
  while (curr) {
    if (i < length / 2) {
      map[i] = curr.val
    } else {
      const twin = length - i - 1
      map[twin] += curr.val
      if (map[twin] > max) {
        max = map[twin]
      }
    }
    curr = curr.next
    i++
  }

  return max
};

//console.log(pairSum(List))


//Given the head of a singly linked list and two integers left and right where left <= right,
// reverse the nodes of the list from position left to position right, and return the reversed list.

// Example 1:
// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]

// Example 2:
// Input: head = [5], left = 1, right = 1
// Output: [5]

