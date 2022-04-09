const result = document.querySelector('#result');

const bodyDive = document.createElement('div');

const text = document.createTextNode('a simple body div');
bodyDive.appendChild(text);
document.body.appendChild(bodyDive);

const heading = document.createElement('h2');
const headingText = document.createTextNode('dynamic heading');
heading.appendChild(headingText);
heading.classList.add('blue');

result.appendChild(heading);


console.log(result.children);