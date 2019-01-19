const CLONE_CLASS = '.clone';
const DEFAULT_CLONE_AMOUNT = 10;

const repeatable = document.querySelector(CLONE_CLASS);
const cloneAmount =
  parseInt(repeatable.dataset.cloneAmount) | DEFAULT_CLONE_AMOUNT;
const parent = repeatable.parentNode;

for (let i = 0; i < cloneAmount; i++) {
  parent.appendChild(repeatable.cloneNode(true));
}
