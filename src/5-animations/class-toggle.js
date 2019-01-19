const elements = document.querySelectorAll('[data-toggle]');

elements.forEach(element => {
  const key = element.dataset.toggleOn;
  const toggleClass = element.dataset.toggleClass;

  document.addEventListener('keypress', event => {
    if (event.key.toUpperCase() === key.toUpperCase()) {
      element.classList.toggle(toggleClass);
    }
  });
});
