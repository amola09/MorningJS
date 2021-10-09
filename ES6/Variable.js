// variable - named sapce in meomory that stores value
// variable names called identifiers.

var browser = "Chrome"
console.log("The HTML page opens on:"+browser)
var language= "javascript"
console.log(" I am learning:"+language)

console.log("-------------------------------------")

// global scope vs local variable

var number =12
function test(){
  var number=100
  console.log("value of number inside the test:"+number)
}
console.log("value of number outside the test:"+number)
test()
console.log("-----------------------------------------------")
var no = 10
var no = 20
console.log(no)

let num=10
let num=20
console.log(num)

