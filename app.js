const headings = document.getElementsByTagName('h2');
console.log(headings);
headings[0].style.color = 'red';
// console.log(headings.length);
const items = document.getElementsByTagName('li');

items[2].style.color = 'orange';
const betterItems = [...items];
betterItems.forEach(function(item){
 console.log(item);
})

// items.forEach(function(item){
//  console.log(item);
// })