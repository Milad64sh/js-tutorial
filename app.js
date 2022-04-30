



 function Person(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function(){
      console.log(`My full name is ${this.firstName} ${this.lastName}`);
 }
}

const john = new Person('john','sanders');
// console.log(john.constructor);

const bob = {};
console.log(bob.constructor);
const list = [];
console.log(list.constructor);
const sayHi = function(){};
console.log(sayHi.constructor);

const susy = new john.constructor('susy', 'carpenter'); 
susy.fullName();