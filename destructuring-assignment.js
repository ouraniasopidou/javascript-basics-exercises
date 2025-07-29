let [a,b] = [1,2]  // Destructuring Assignment

console.log("a: ", a)
console.log("b: ", b)


let [c,d] = [10,20]   // Destructuring Assignment
[c,d] = [d,c]         // Destructuring Assignment and Swap

const user = {
    id: 1,
    firstname: "Rania",
    lastname: "S."
}

let { firstname, lastname } = user
// let {firstname: first, lastname: last} = user   ---> rename
console.log("firstname: " + firstname)
console.log("lastname: " + lastname)