const counter = {
    counterValue: document.getElementById('value'),
     incrBtn: document.querySelector('button[data-action="increment"]'),
     decrBtn: document.querySelector('button[data-action="decrement"]'),
     valueEl: document.querySelector('span#value'),
};
let value = 0;
function decrement() {
  value -= 1;
  counter.valueEl.textContent = value;
}
function increment() {
  value += 1;
  counter.valueEl.textContent = value;
}
counter.decrBtn.addEventListener('click', decrement);
counter.incrBtn.addEventListener('click', increment);