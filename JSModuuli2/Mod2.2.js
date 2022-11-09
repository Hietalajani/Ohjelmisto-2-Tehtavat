'use strict';

const numberofparticipants = parseInt(prompt('HOW MANY HOES?'))

let participants = []

for (let i = 1; i <= numberofparticipants; i++) {
    let name = prompt('GIVE ME NAMES BITCH')
    participants.push(name)
}



for (let i = 0; i <= participants.length - 1; i++) {
    let li = document.querySelector('ol').appendChild(document.createElement('li'))
    li.innerHTML = participants[i]
}