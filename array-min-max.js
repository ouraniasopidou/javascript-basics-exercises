const arr = [ 7, 4, 9, 2, 14]

let minVal = Math.min(...arr)
let maxVal = Math.max(...arr)

let minPosition = arr.indexOf(minVal)
let maxPosition = arr.indexOf(maxVal)

console.log(`Min value: ${minVal}, Min Position: ${minPosition}`)
console.log(`Max value: ${maxVal}, Max Position: ${maxPosition}`)