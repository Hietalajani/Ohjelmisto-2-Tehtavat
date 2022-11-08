function concat(arr) {
    let sum = ""
    for (let stri of arr) {
        sum += stri
    }
    return sum
}

const list = ['mo', 'lo', 'jo']

document.getElementById('lol').innerHTML = concat(list)