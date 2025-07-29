const arr = [ 1000, 345, 678, 5, 15, 55, 345, 2115 ]
arr.sort()     // non correct result
console.log(arr)     


arr.sort(function (a,b) {               //correct result
    return a - b
})
console.log(arr)


// if (a > b) return 1
// else if (a < b) return -1no
// else return 0

arr.sort(function (a,b) {               //correct result
    return b - a
})
console.log(arr)