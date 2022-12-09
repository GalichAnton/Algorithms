/*Дан массив с датами.

Необходимо написать функцию, которая вернёт объект вида
{
  "2019": ["05-02", "22-09" "07-12"];
  "2015": ["12-01"];
  "2010": ["10-06", "25-07"]
}
*/

const data = [
  { date: "2019-12-07" },
  { date: "2015-01-12" },
  { date: "2010-07-25" },
  { date: "2010-06-10" },
  { date: "2019-02-02" },
  { date: "2019-09-22" }
];

function sortDate(arr) {
  let res = {};
  for (let i = 0; i < arr.length; i++) {
    if (res[arr[i].date.substring(0, 4)]) {
      res[arr[i].date.substring(0, 4)] = [
        ...res[arr[i].date.substring(0, 4)],
        arr[i].date.substring(5)
      ].sort();
    } else {
      res[arr[i].date.substring(0, 4)] = [arr[i].date.substring(5)];
    }
  }
  return res;
}

console.log(sortDate(data));

