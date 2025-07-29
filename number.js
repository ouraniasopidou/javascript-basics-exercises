let num1 = 10;            // Number type
let num2 = new Number(15) // Object type
let num3 = Number("17")   // Type coersion from string -> number
let num4 = Number("AUEB") // num4 -> NaN (not a number) like undefined

console.log("Num1: ", num1)
console.log("Num2: ", num2)
console.log("Num3: ", num3)
console.log("Num4: ", num4)

console.log("Min: " + Number.MIN_VALUE)
console.log("Max: " + Number.MAX_VALUE)

console.log("12 is integer: ", Number.isInteger(12))
console.log("3/aueb is NaN", Number.isNaN(3/"aueb"))

console.log("Div positive by zero: ", (12/0))  // will give infinity
console.log("Div negative by zero: ", (-12/0)) // negative infinity

console.log("Div 10/3 = ", (10/3).toFixed(2))   //toFixed for floating digits


