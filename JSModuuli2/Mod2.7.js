'use strict';

function diceroll(sides) {
    return Math.floor(Math.random() * sides + 1)
}

const number = parseInt(prompt('HOW MANY SIDES YOU USELESS CODER SCUM'))

let roll = 1;

while (roll !== number) {
    roll = diceroll(number)
    document.body.appendChild(document.createElement('ul'))
    document.querySelector('ul').appendChild(document.createElement('li')).innerHTML = roll
}