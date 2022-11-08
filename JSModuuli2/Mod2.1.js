let arr = []

for (let i = 1; i <= 5; i++) {
    let number = parseInt(prompt('GIVE ME A NUMBER YOU HOE'))
    arr.push(number)
}

for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i])
}