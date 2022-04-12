const heading = document.querySelector('h1');
const btn = document.querySelector('.btn');
const link = document.querySelector('#link');

function someFunc(e){
 e.preventDefault();
}
link.addEventListener('click',someFunc);

heading.addEventListener('click', function(evt){
console.log(evt.currentTarget);
console.log(this);
});

btn.addEventListener('click', function(evt){
evt.currentTarget.classList.add('blue');
console.log(evt.type);
});

