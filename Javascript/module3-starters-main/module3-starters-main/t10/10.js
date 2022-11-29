'use strict';

const input = document.querySelector('input[type="submit"]')

input.addEventListener('click', (evt) => {

  evt.preventDefault();

  const first = document.querySelector('input[name="firstname"]').value;
  const last = document.querySelector('input[name="lastname"]').value;

  document.querySelector('#target').innerText = `Your name is ${first} ${last}`;
});