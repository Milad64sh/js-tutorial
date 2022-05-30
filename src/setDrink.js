const setDrink = () => {
  section.addEventListener('click', function (e) {
    // e.prevetnDefault();
    const id = e.target.parentElement.dataset.id;
    localStorage.setItem('drink', id);
  });
};

export default setDrink;
