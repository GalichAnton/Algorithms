Promise.resolve(1) 
.then(() => 2) //
.then(3)  
.then((value) => value * 3) 
.then(Promise.resolve(4)) 
.then(console.log) 

// 1
// 2 (as 1 isn't used)
// skip
// 2 * 3 == 6
// creates a Pending promise
// funnels 6 into console.log