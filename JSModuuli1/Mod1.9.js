'use strict'
const number = parseInt(prompt('GIMME A NUMBER DICKHEAD'))

if (number % 2 !== 0) {
    for (let i = 2; i <= Math.floor(Math.sqrt(number)+1); i++) {
        if (number % i === 0) {
            document.getElementById('lol').innerHTML = `${number} is not a prime number`
            break
        }
        else document.getElementById('lol').innerHTML = `${number} is a prime number`
    }
}
else document.getElementById('lol').innerHTML = `${number} is not a prime number`