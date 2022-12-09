const arrayObjects = [
  { status: 200, description: "OK" },
  { status: 200, description: "OK" },
  { status: 404, description: "Not Found" },
  { status: 500, description: "Internal Server Error" }
];
const byKey = "status"; // could be anything

function groupObjectsByKey(arrayObjects, byKey) {
  const res = arrayObjects.reduce((acc, obj) => {
    if (!acc[obj[byKey]]) acc[obj[byKey]] = { key: obj[byKey], values: [] };
    acc[obj[byKey]].values.push(obj);
    return acc;
  }, {});
  return Object.keys(res).map((k) => res[k]);
}

console.log(groupObjectsByKey(arrayObjects, byKey));

// [
//   {
//     key: 200,
//     values: [
//       { status: 200, description: 'OK' },
//       { status: 200, description: 'OK' },
//     ],
//   },
//   { key: 404, values: [{ status: 404, description: 'Not Found' }] },
//   { key: 500, values: [{ status: 500, description: 'Internal Server Error' }] },
// ]