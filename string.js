// Strings  are immutable

let s1 = "AUEB1"
let s2 = new String("AUEB2")
let s3 = String(3)
let s4 = 'AUEB3'
let s5 = `AUEB4`
let s6 = `This is 
an example

of a template litteral, first introduced in JS with version ES6`



const aueb = "AUEB"

//aueb = "AUEB other" will raise error. string can't change 
 
let myAueb = "Athens Uni of Econ and Bus"

let outStr = ""                         //for horizontal print
for (let letter of myAueb) {
    outStr += letter
} console.log(outStr)


for (let letter of myAueb) {          // for vertical print
    console.log(letter)
} 