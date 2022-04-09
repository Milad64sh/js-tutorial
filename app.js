const result = document.querySelector('#result');
const first = document.querySelector('.red');
const bodyDive = document.createElement('div');

const text = document.createTextNode('a simple body div');
bodyDive.appendChild(text);
document.body.insertBefore(bodyDive,result);

const heading = document.createElement('h2');
const headingText = document.createTextNode('dynamic heading');
heading.appendChild(headingText);
heading.classList.add('blue');

result.insertBefore(heading,first);

console.log(result.children);