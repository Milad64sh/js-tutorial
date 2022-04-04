const people = [
 {name: 'john', age: 25, position: 'developer', id:1},
 {name: 'jimmy', age: 30, position: 'designer', id: 2},
 {name: 'rose', age: 35, position: 'boss', id: 3},
 {name: 'michael', age: 40, position: 'ceo', id: 4},
];


const youngPeople = people.filter(function(person){
 return person.age <= 30;
});

const positions = people.filter(function(person){
 return person.position === 'developer';
});
console.log(positions);
console.log(youngPeople);