'use strict';

const li1 = document.getElementById('target').
    appendChild(document.createElement('li'));
const li2 = document.getElementById('target').
    appendChild(document.createElement('li'));
const li3 = document.getElementById('target').
    appendChild(document.createElement('li'));

li1.innerText = 'First item';
li2.innerText = 'Second item';
li3.innerText = 'Third item';

li2.setAttribute('class', 'my-item');