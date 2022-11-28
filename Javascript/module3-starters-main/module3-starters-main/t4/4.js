'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

for (let i = 0; i < students.length; i++) {
  let element = document.querySelector('#target').
      appendChild(document.createElement('option'));
  element.setAttribute('value', students[i]['id']);
  element.innerHTML = students[i]['name'];
}