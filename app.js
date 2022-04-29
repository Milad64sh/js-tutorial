
const age = 60
const person = {
 'random-value': 'random',
 name : 'john',
 age: age,
 married: true,
 siblings: ['anna','peter'],
 greet: function (name){
  console.log(`hello, ma name is ${name}`);
 },
 sayHello(name){
  console.log(`hello, my name is ${name}`);
 },
 job:{
  title: 'developer',
  compnay: {
   name:'coding addict',
   address:'123,landline road, LA',
  },
 },
};
let random = 'random-value';
random = 'age';
console.log(person[random]);
