const arrofstr = prompt('Anna kolme lukua pilkulla erotettuina: ').split(", ")

const arrofnum = arrofstr.map(str => {
  return Number(str);
})

const sum = arrofnum.reduce((partialSum, a) => partialSum + a, 0);

document.getElementById('lol').innerHTML = "Summa = " + sum