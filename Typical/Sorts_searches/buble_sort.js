const arr = [1,45, 3, 33, 5, 6, 78, 8, 9, 10,-56, 99, -100, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10];
let count = 0;

function bubleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            count++;
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }           
        }
    }
    return arr;
}

console.log(bubleSort(arr));
console.log(count);

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

function reverseList (head) {
    let prev = null
    let dummy = head

    while(head) {
      let tmp = head.next
      head.next = prev
      prev = head
      head = tmp
    }

    return prev
};

function mergeTwoLists(list1, list2) {
  const dummy = new ListNode()
  let tail = dummy

  while (list1 && list2) {
    if(list1.val < list2.val) {
      tail.next = list1
      list1 = list1.next 
    } else {
      tail.next = list2
      list2 = list2.next
    } 
    tail = tail.next
  }

  if(list1) {
    tail.next = list1
  } 
  if(list2) {
    tail.next = list2
  }

  return dummy.next
};
























function bubbleSort2(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                let tmp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = tmp
            }
        }
    }
    return arr
}

console.log(bubbleSort2(arr))