const people = [
 {name: 'bob', age: 20, position: 'Developer'},
 {name: 'John', age: 25, position: 'Designer'},
 {name: 'Susy', age: 30, position: 'the boss'},
];
people.forEach(function(item){
console.log(item.position.toUpperCase());
});