let input = 0
let arr = []

for (;(!(input in arr));) { // lol
    arr.push(input)
    input = parseInt(prompt('GE MIG EN NUMMER URPÅ'))
}

arr.shift()
confirm('Number has already been given!')