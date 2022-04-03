const people = [
 {name: 'john', age: 20, position:'developer', id: 2, salary: 200},
 {name: 'bob', age: 25, position:'designer', id: 2, salary: 300},
 {name: 'susy', age: 30, position:'the boss', id: 3, salary: 500},
];

const total = people.reduce(function(acc, currItem){
console.log(`total ${acc}`);
console.log(`current money: ${currItem.salary}`);
acc += currItem.salary;
 return acc;
}, 0);

console.log(total);