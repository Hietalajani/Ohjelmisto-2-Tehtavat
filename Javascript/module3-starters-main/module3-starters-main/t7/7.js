'use strict';

const trig = document.querySelector('#trigger');
const target = document.querySelector('#target');

trig.addEventListener('mouseover', () => {
  target.setAttribute('src', 'img/picB.jpg');
});
trig.addEventListener('mouseleave', () => {
  target.setAttribute('src', 'img/picA.jpg');
});

