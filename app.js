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

this.increase  = this.increase.bind(this);
this.decrease  = this.decrease.bind(this);
this.reset  = this.reset.bind(this);

this.increaseBtn.addEventListener('click', this.increase);
this.decreaseBtn.addEventListener('click', this.decrease);
this.resetBtn.addEventListener('click', this.reset);
}
Counter.prototype.increase = function (){
 console.log(this);
 this.value++;
 this.valueDOM.textContent = this.value;
}
Counter.prototype.decrease = function (){
 this.value--;
 this.valueDOM.textContent = this.value;
}
Counter.prototype.reset = function (){
 this.value = 0;
 this.valueDOM.textContent = this.value;
}


const firstCounter = new Counter (getClass('.first-counter'), 0);
const secondCounter = new Counter (getClass('.second-counter'), 50);

secondCounter.decrease();