function Counter(classes, value){
 console.log(classes,value);
}



firstCounter = new Counter (getClass('.first-counter', 0));
secondCounter = new Counter (getClass('.second-counter', 50));


function getClass (selection){
 const classes =document.querySelector(selection);
 if(classes){
  return classes
 }
 throw new Error (
  `Please check "${classes}" selector, no such classes exist`
 );
}