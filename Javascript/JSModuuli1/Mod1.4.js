const your_name = prompt('What is your name?')

const dictio = {
  1: "Daredevil",
  2: "Slytherin",
  3: "Hufflepuff",
  4: "Ravenclaw"
}

function randomint(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const howse = dictio[randomint(1, 4)]

document.getElementById('lol').innerHTML = your_name + ", you are " + howse