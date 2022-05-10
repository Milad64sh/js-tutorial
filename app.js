const bob = {
  firstName : 'bob',
  lastName : 'jordan',
  sayName: function(){
    console.log(this);
    setTimeout(() =>{
      console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    },2000);
  },
};
bob.sayName();


const anna = {
  firstName : 'anna',
  lastName : 'sanders',
  sayName: ()=>{
    console.log(this);
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
  },
};
// anna.sayName();