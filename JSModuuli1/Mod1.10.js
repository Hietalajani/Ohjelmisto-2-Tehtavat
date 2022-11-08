const number = parseInt(prompt('ANNA VITTU NUMERO KIITOS'))
const sum = parseInt(prompt('ANNA VITTU SUMMA KIITOS'))

function nopanheitto(määrä) {
    let arr = []
    for (let i = 1; i <= määrä; i++) {
        let noppa = Math.floor(Math.random() * 6 + 1)
        arr.push(noppa)
    }
    return arr.reduce((partialsum, a) => partialsum + a, 0);
}

let win = 0

for (let i = 1; i <= 10000; i++) {
    if (nopanheitto(number) === sum) {
        win += 1
    }
}

document.getElementById('lol').innerHTML = `TODENNÄKÖISYYS ${win/100}%`


