'use strict';

let select = document.querySelector('select');
const p = document.querySelector('#result');

function calculator() {
  let num1 = +document.querySelector('#num1').value;
  let num2 = +document.querySelector('#num2').value;

  if (select.value === 'add') {
    p.innerHTML = (num1 + num2);
  } else if (select.value === 'sub') {
    p.innerHTML = (num1 - num2);
  } else if (select.value === 'multi') {
    p.innerHTML = (num1 * num2);
  } else if (select.value === 'div') {
    p.innerHTML = (num1 / num2);
  }
}

const start = document.querySelector('#start');

start.addEventListener('click', calculator);