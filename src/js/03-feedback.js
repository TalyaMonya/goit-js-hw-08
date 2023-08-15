import throttle from 'lodash.throttle'

const form = document.querySelector('.feedback-form');
const KEY_LS = 'feedback-form-state';

form.addEventListener('input', onTextInput);
form.addEventListener('submit', throttle(onFormsubmit, 500));



let data = JSON.parse(localStorage.getItem(KEY_LS)) ?? {};
const { email, message } = form;

email.value = data.email ?? '';
message.value = data.message ?? '';



function onTextInput(evt) {
    data[evt.target.name] = evt.target.value;
    localStorage.setItem(KEY_LS, JSON.stringify(data));
}


function onFormsubmit(evt) {
    evt.preventDefault();
    console.log(data);
    form.reset();
    localStorage.removeItem(KEY_LS);
    data = {};
}