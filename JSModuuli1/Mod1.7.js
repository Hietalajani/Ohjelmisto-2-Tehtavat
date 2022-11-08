const number = prompt('Number of dice rolls bitch')
let arr = []
for (let i = 1; i < number; i++) {
  let diceroll = Math.floor(Math.random() * 6 + 1)
  console.log(diceroll)
  arr.push(diceroll)
}

document.getElementById('lol').innerHTML = `Sum: ${arr.reduce((partialSum, a) => partialSum + a, 0)}`