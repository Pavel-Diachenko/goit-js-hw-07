const refs = {
    input: document.querySelector('#validation-input'),
};
refs.input.addEventListener('blur', InputEl);

function InputEl(event) {
    const inputLen = Number(event.target.dataset.length);
    const inputVal = event.target.value.length;
    if (inputLen === inputVal) {
        refs.input.classList.add('valid');
        refs.input.classList.remove('invalid');
    } else {
        refs.input.classList.remove('valid');
        refs.input.classList.add('invalid');
    }
}
