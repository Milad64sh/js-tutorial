import getElement from './src/getElement.js';
import presentsDrinks from './src/presentDrinks.js';
const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';

window.addEventListener('DOMContentLoaded', () => {
  presentsDrinks(URL);
});
