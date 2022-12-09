/*
написать функцию, которая принимает на вход строку вида 'a.b.d.e'
А возвращает объект вида "{ a: { b: { d: { e: {} } } } }"
 */
function getNestedObj(input) {
  const arr = input.split(".");
  return getObj(arr);
}

function getObj(arr) {
  if (arr.length === 0) {
    return {};
  } else return { [arr.shift()]: getObj(arr) };
}

// function getNestedObj(input) {
//   const arr = input.split(".");
//   return arr.reduceRight((acc,cur)=> {
//     acc = {[cur]:{...acc} }
//     return acc
//   },{})
// }

console.log(getNestedObj("a.b.d.e"));