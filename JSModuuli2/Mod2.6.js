'use strict';

function diceroll() {
    return Math.floor(Math.random() * 6 + 1)
}

let roll = 1

while (roll !== 6) {
    roll = diceroll()
    document.body.appendChild(document.createElement('ul'))
    document.querySelector('ul').appendChild(document.createElement('li')).innerHTML = roll
}