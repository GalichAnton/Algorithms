function names(arr) {
  return arr.reduce((acc, cur, i) => {
    if (i === 0) {
      acc = cur.name;
    } else if (i < arr.length - 1) {
      acc = `${acc}, ${cur.name}`;
    } else {
      acc = `${acc} & ${cur.name}`;
    }
    return acc;
  }, "");
}

console.log(names([{ name: "Toha" }, { name: "Ruslan" }, { name: "Andrey" }]));
