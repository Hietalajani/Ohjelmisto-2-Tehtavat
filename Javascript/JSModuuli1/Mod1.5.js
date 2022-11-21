const vuosi = prompt('Gib year motherfucker')

if (vuosi % 4 === 0) {
  if (vuosi % 100 === 0) {
    if (vuosi % 400 === 0) {
      document.getElementById('lol').innerHTML = "Is a leap year"
    }
    else document.getElementById('lol').innerHTML = "Not a leap year"
  }
  else document.getElementById('lol').innerHTML = "Is a leap year"
}
else document.getElementById('lol').innerHTML = "Not a leap year"