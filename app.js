const heading = document.querySelector('h2');
const btn = document.querySelector('.btn');



heading.addEventListener('mouseenter',function(){
 heading.classList.add('blue');
})
heading.addEventListener('mouseleave',function(){
 heading.classList.remove('blue');
})


btn.addEventListener('click', function(){
 console.log('you clicked me');
});
btn.addEventListener('mousedown', function(){
 console.log('down');
});
btn.addEventListener('mouseup', function(){
 console.log('up');
});