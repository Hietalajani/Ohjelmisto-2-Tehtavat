const start = parseInt(prompt('START YEAR LOW HANGING FRUIT'));
const end = parseInt(prompt('END YEAR POTATO'));

function createli(number) {
  let li = document.getElementById('lol').appendChild(document.createElement('li'))
  li.innerHTML = number
}

for (let i = start; i <= end; i++) {
  if (i % 4 === 0) {
    if (i % 100 === 0) {
      if (i % 400 === 0) {
        createli(i)
      }
    }
    else createli(i)
  }
}