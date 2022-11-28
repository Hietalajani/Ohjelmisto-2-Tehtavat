'use strict';
const names = ['John', 'Paul', 'Jones'];

for (let i = 0; i < names.length; i++) {
  let li = document.querySelector('#target').
      appendChild(document.createElement('li'));
  li.innerHTML = names[i];
}
