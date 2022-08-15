import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const formInput = document.querySelector('.feedback-form input');
const formText = document.querySelector('.feedback-form textarea');

function formChange(even) {
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({
      email: formInput.value,
      message: formText.value,
    })
  );
}
function getData() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (data) {
    formInput.value = data.email;
    formText.value = data.message;
  }
}
function formSubmit(even) {
  even.preventDefault();
  console.log({
    email: formInput.value,
    message: formText.value,
  });
  localStorage.clear();
  form.reset();
}
form.addEventListener('input', throttle(formChange, 500));
// formText.addEventListener('input', throttle(formChange, 500));
form.addEventListener('submit', formSubmit);

getData();
