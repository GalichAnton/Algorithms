// Fast and slow pointer
let fn = head => {
  let slow = head;
  let fast = head;
  let ans = 0;

  while (fast && fast.next) {
    // do logic
    slow = slow.next;
    fast = fast.next.next;
  }

  return ans;
}

//Reversing a linked list

let fn = head => {
  let curr = head;
  let prev = null;
  while (curr) {
    let nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }

  return prev;
}