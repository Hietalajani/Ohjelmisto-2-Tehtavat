'use strict'
const number = parseInt(prompt('GIMME A NUMBER DICKHEAD'))

if (number === 2 || number === 3 || number === 5 || number === 7) {
    document.getElementById('lol').innerHTML = `${number} is a prime number`
}

if (number % 2 !== 0 && number > 7) {
    for (let i = 3; i <= Math.floor(Math.sqrt(number)+1); i += 2) {
        if (number % i === 0) {
            document.getElementById('lol').innerHTML = `${number} is not a prime number`
            break
        }
        else document.getElementById('lol').innerHTML = `${number} is a prime number`
    }
}
else document.getElementById('lol').innerHTML = `${number} is not a prime number`