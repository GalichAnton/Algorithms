// Переписать на ES-6, что бы выводило в консоль через 2 секунды
// var Jonh = {
//   name: "Jonh Doe",
//   balance : 1500,
//   deduct: function (amount) {
//     this.balance = this.balance - amount;
//     return this.name + "" + this.balance;
//   },
// }

const Jonh = {
  name: "Jonh Doe",
  balance: 1500,
  deduct(amount) {
    this.balance = this.balance - amount;
    let promise = new Promise((res) => {
      setTimeout(() => res(console.log(this.name + "" + this.balance)), 2000);
    });
    return promise;
  }
};

Jonh.deduct(200).then();
