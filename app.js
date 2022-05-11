// arrays
const fruit = ['apple','orange','lemon'];
const [first,...fruits] = fruit;
console.log(first,fruits);

// objects
const person = {name: 'john', lastName: 'smith', job: 'developer'};
const {job,...rest } = person;
console.log(job,rest);

const testScores = [70, 80, 66, 34, 95, 100, 65];
const getAverage = (name,...scores) =>{
let total = 0;
for(const score of scores){
 total += score;
}
console.log(`${name}'s average score is ${total/scores.length}`);
};
getAverage(person.name, ...testScores);