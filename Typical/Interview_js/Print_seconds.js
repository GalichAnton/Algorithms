const printSeconds = (number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(number);
      resolve();
    }, 1000);
  });
};

//printSeconds(1).then(()=>printSeconds(2)).then(()=>printSeconds(3))

async function run() {
  await printSeconds(1);
  await printSeconds(2);
  await printSeconds(3);
}
run();
