const people = [
 {name: 'john', age: 20, position:'developer'},
 {name: 'bob', age: 25, position:'designer'},
 {name: 'susy', age: 30, position:'the boss'},
];
 

const newPeople = people.map(function (person){
 return {
  firstName: person.name.toUpperCase(),
  oldAge: person.age + 20,
 }
});

const names = people.map(function(person){
 return `<h1>${person.name}</h1>`;
});
document.body.innerHTML = names.join('');

console.log(names);