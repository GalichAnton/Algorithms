// Составить историю полетов по имеющимся билетам

function inOrder(array, acc = []) {
  let aCC = [...acc];
  let arr = [...array];
  if (array.length === 1) return [...aCC, ...array[0]];
  let to = array.map((el) => el[1]);
  let first;
  let indeX;
  arr.forEach((el, index) => {
    if (!to.includes(el[0])) {
      first = el[0];
      indeX = index;
    }
  });
  if (first) aCC.push(first);
  delete arr[indeX];
  arr = arr.filter((el) => !!el === true);
  return inOrder(arr, aCC);
}

console.log(
  inOrder([
    ["MNL", "TAG"],
    ["CEB", "TAC"],
    ["TAG", "CEB"],
    ["TAC", "BOR"]
  ])
);