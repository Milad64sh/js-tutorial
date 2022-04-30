



 function Person(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function(){
      console.log(`My full name is ${this.firstName} ${this.lastName}`);
 }
}

const john = new Person('john', 'anderson');
john.fullName();