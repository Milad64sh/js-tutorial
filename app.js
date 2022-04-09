const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');


third.classList.add('colors','text');
third.classList.remove('colors');
const classValue = third.classList;
console.log(classValue);


second.className = 'colors text';
second.className = 'text';


// const classValue = first.className;

let result = third.classList.contains('text'); 
if(result){
 console.log('hello world');
} else{
 console.log('does not have the class');
}