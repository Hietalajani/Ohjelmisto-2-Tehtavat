'use strict';

const nofcandidates = parseInt(prompt('GIVE ME NUMBER OF CANDIDATES'))
let list = []

for (let i = 1; i <= nofcandidates; i++) {
    const nameofcandidate = prompt(`GIVE ME NAME NUMBER ${i}`)
    list.push({'name': nameofcandidate, 'votes': 0})
}

const noofvoters = parseInt(prompt('GIVE ME NUMBER OF VOTERS'))

function askvote(numberofvoters) {
    let names = []
    for (let dic of list) {
            names.push(dic['name'])
        }
    for (let i = 1; i <= numberofvoters; i++) {
        let vote = prompt(`VOTER NUMBER ${i}, GIVE ME THE PERSON WHO YOU VOTE FOR`)
        if (names.includes(vote)) {
            list[names.indexOf(vote)]['votes'] += 1
        }
    }
}

askvote(noofvoters)

list.sort((a, b) => {return b['votes'] - a['votes']})

console.log(`The winner is ${list[0]['name']} by ${list[0]['votes'] - list[1]['votes']} votes`)
console.log('results:')

for (let dict of list) {
    console.log(`${dict['name']}: ${dict['votes']} votes`)
}