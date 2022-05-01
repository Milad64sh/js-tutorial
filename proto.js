function Account(name,initialBalance){
 this.name = name;
 this.balance = initialBalance;
 this.bank = 'bank of america';
 }


const john = new Account('john',200);
const bob = new Account('bob',0);

Account.prototype.bank = 'CHASE';
Account.prototype.deposit = function(amount){
  this.balance += amount;
  console.log(`Hello ${this.name}, your balance is ${this.balance}`);
};

// console.log(john.bank);
// console.log(bob);

// john.deposit(300);
console.log({});
console.log([]);