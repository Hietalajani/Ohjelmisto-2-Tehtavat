let names = []

for (let i = 1; i <= 6; i++) {
    let name = prompt('Anna koiran nimi')
    names.push(name)
}

document.body.appendChild(document.createElement('ul'))

names.sort()
names.reverse()

for (let i = 0; i <= 5; i++) {
    let li = document.querySelector('ul').appendChild(document.createElement('li'))
    li.innerHTML = names[i]
}