const is = confirm('Should I calculate the square root?')

if (is === true) {
  const number = prompt('Give me a number motherfucker XD');

  if (number >= 0) {
    const neliojuuri = Math.sqrt(number)
    document.getElementById('lol').innerHTML = `Square root ${neliojuuri}`
  }
  else document.getElementById('lol').innerHTML = "The square root of a negative number is not defined"
}
else {
  document.getElementById('lol').innerHTML = "The square root is not calculated"
}