const first = document.querySelector('#first');
const second = document.querySelector('#second');
const third = document.querySelector('#third');


first.className = 'colors';
first.className = 'text colors';

second.classList.add('text','colors');

second.classList.remove('colors');
let result = second.classList.contains('text');
if(result){
 console.log('hello world');
} else{
 console.log('not valued');
}