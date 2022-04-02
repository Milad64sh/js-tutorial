const people = [
 {name: 'bob', age: 20, position: 'Developer'},
 {name: 'John', age: 25, position: 'Designer'},
 {name: 'Susy', age: 30, position: 'the boss'},
 {name: 'Anna', age: 35, position: 'the boss'},
];

const ages = people.map(function (person){
 return person.age + 20;
});
const newPeople = people.map(function (person){
 return {firstName:person.name.toUpperCase()}
})
console.log(ages);