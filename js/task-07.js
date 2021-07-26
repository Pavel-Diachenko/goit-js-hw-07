const refs = {
inputEl: document.querySelector('#font-size-control'),
textEl: document.querySelector('#text'),
};


refs.inputEl.addEventListener('change', onInputChange);

function onInputChange(event) {

refs.textEl.style.fontSize = event.target.value * 0.32 + "px";

}

