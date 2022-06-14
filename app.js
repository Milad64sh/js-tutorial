const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');
let count = 0;
btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains('decrease')) {
      count--;
      value.style.color = 'red';
      value.textContent = count;
    } else if (styles.contains('increase')) {
      count++;
      value.style.color = 'green';
      value.textContent = count;
    } else {
      count = 0;
      value.style.color = 'black';
      value.textContent = count;
    }
  });
});
