
 function createPerson (firstName, lastName){
  return {
   firstName: firstName,
   lastName: lastName,
   fullName:function(){
      console.log(`My full name is ${this.firstName} ${this.lastName}`);
   } 
  }
 }
 const john = createPerson('john', 'anderson');
 john.fullName();
 const bob = createPerson('bob', 'anderson');
 bob.fullName();
 const susy = createPerson('susy', 'anderson');
 susy.fullName();