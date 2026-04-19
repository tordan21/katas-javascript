// 4.1

const button = document.createElement('button');
button.id = 'btnToClick';
button.textContent = 'Click me';

document.body.appendChild(button);

button.addEventListener('click', (event) => {
  console.log(event);
});


// 4.2

const inputFocus = document.querySelector('.focus');

inputFocus.addEventListener('focus', (event) => {
  console.log(event.target.value);
});


// 4.3

const inputValue = document.querySelector('.value');

inputValue.addEventListener('input', (event) => {
  console.log(event.target.value);
});