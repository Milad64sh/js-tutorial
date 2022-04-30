const bob = {
 firstName : 'bob',
 lastName : 'sanders',
 fullName : function(){
  console.log(`My full name is ${this.firstName} ${this.lastName}`);
 },
};
const john = {
 firstName : 'john',
 lastName : 'Anderson',
 fullName : function(){
  console.log(`My full name is ${this.firstName} ${this.lastName}`);
 },
};
john.fullName();
bob.fullName();