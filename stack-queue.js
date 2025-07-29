const arr = [1,2,3,4,5]

//Stack - Last In First Out (LIFO)
arr.push(6)
let popped = arr.pop()

console.log(popped)

//Queues - First In First Out (FIFO)
const bankQueue = [ 1,2,3,4,5 ]
bankQueue.push(6)
let first = bankQueue.shift ()  //exports and deletes the first

//Insert front
const arr3 = [1,2]
arr3.unshift(0)     