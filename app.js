function getClass (selection){
 const classes =document.querySelector(selection);
 if(classes){
  return classes
 }
 throw new Error (
  `Please check "${classes}" selector, no such classes exist`
 );
}


function Counter (classes, value){
this.counter = classes;
this.value = value;
this.resetBtn = classes.querySelector('.reset');
this.increaseBtn = classes.querySelector('.increase');
this.decreaseBtn = classes.querySelector('.decrease');
this.valueDOM = classes.querySelector('.value');
this.valueDOM.textContent = this.value;
}



firstCounter = new Counter (getClass('.first-counter', 0));
secondCounter = new Counter (getClass('.second-counter', 50));

