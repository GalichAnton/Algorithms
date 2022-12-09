function group<T extends Record<string,any>>(arr: T[], key: keyof T): {[key:string]:T[]} {
  return arr.reduce<{[key:string]:T[]}>((acc, cur) => {
    if(!acc[cur[key]])  {
      acc[cur[key]] = [cur];
    } else acc[cur[key]].push(cur);
    return acc
  },{})
}
const arr = [
  { group: 1, name: 'a' },
  { group: 1, name: 'b' },
  { group: 2, name: 'c' },
];

console.log(group(arr, 'name'));