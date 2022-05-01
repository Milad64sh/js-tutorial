class Account {
constructor(name,initialBalance){
this.name = name;
this.balance = initialBalance;
}
bank = 'CHASE';
deposit(amount){
  this.balance += amount;
  console.log(`Hello ${this.name}, your balance is ${this.balance}`);
}
}

const john = new Account('john',500);
console.log(john);
john.deposit(500);
console.log(john.bank);



const bob = new Account('bob',700);
console.log(bob);
bob.deposit(500);
bob.deposit(1000);
console.log(bob.bank);


