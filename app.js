const longName = 'john smith pepper III';
let shortName = '';


for(const letter of longName){
 if (letter === ' '){
  continue;
 }
 else{
  shortName += letter;
 }
}
console.log(shortName);

const fruits = ['apple', 'orange', 'banana', 'peach'];
for (const fruit of fruits){
 if(fruit === 'banana'){
  continue;
 }
 console.log(fruit);
}