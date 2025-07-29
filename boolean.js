let b1 = true
let b2 = new Boolean(false)
let b3 = Boolean("1")

//Falsy Values
// 0, 0.0 , 0n
// " ", ' ' , ` `
// null, undefined, NaN

//Truthy are all the others

console.log("1 is: ", Boolean(1))                       //Truthy
console.log("0 is: ", Boolean(0))                       // Falsy
console.log("Empty string is: ", Boolean(""))            //Falsy
console.log("Null is: ", Boolean(null))                  //Falsy
console.log("Undefined is: ", Boolean(undefined))        //Falsy
console.log("Object is: ", Boolean({}))                  //Truthy
console.log("Array is: ", Boolean([]))                    //Truthy
console.log("Boolean is: ", Boolean(new Boolean(false)))  //Truthy

while (1) {            
    break
}

do {
    console.log("Hello CF!")
} while(0)

for (;1;) {                        //or    for(let i = 0; 1; i++)      //eternity run if not break 
    console.log("Hello Again!")
    break
}