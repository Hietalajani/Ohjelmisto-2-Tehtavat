'use strict';

const button = document.querySelector('#start');
const p = document.querySelector('#result');

button.addEventListener('click', () => {
  let input = document.querySelector('#calculation').value;
  if (input.includes('+')) {
    const arr = input.split('+');
    p.innerHTML = parseInt(arr[0]) + parseInt(arr[1]);
  } else if (input.includes('-')) {
    const arr = input.split('-');
    p.innerHTML = parseInt(arr[0]) - parseInt(arr[1]);
  } else if (input.includes('/')) {
    const arr = input.split('/');
    p.innerHTML = parseInt(arr[0]) / parseInt(arr[1]);
  } else if (input.includes('*')) {
    const arr = input.split('*');
    p.innerHTML = parseInt(arr[0]) * parseInt(arr[1]);
  }
});