const container = document.querySelector('.container');
const list = document.querySelector('.list-items');

function showBubbling(e){
 console.log('current target',e.currentTarget);
 console.log('target',e.target);
 if(e.target.classList.contains('link')){
  console.log('you clicked on the link');
 }
}
function stopPropagation(e){
 e.stopPropagation();
}

list.addEventListener('click', stopPropagation);
