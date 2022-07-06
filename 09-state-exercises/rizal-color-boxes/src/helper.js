export function chooseRandom(arr) {
    const randId = Math.floor(Math.random() * arr.length)
    return arr[randId]
}