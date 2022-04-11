const result = document.querySelector('#result');
const bodyDiv = document.createElement('div');
const text = document.createTextNode('a simple body div');
bodyDiv.appendChild(text);
document.body.insertBefore(bodyDiv,result);
bodyDiv.classList.add('blue');

const heading = document.createElement('h2');
heading.innerText = 'dynamic heading';
result.appendChild(heading);


const smallHeading = document.createElement('h6');
smallHeading.innerText = 'small heading';
smallHeading.classList.add('blue');
document.body.replaceChild(smallHeading,bodyDiv);



console.log(result.children);