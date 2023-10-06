//Learn js folder keep learning in text files easy to execute in browser in experiment
//similar to learn X and Y language

// will not work because expecting curly brackets
() => {car: bigCar, color:red}
cannot use object in implicit return and 
//thinks its a floating point
car.21.red

//explain this code
let a = 2;
a -= 1 - a; 
//console.log(a - (1 - a))
//it evaulates to the right first
console.log(a) //why is it 3?
console.log(1 - - 1) //equals 2

how to handle empty arrays in javavscript
[].push(0) = 1
[].push() = 0




TERNARY OPERATOR QUESTION
why is conditional failing to execute
let str = "str"
/[0 - 9]/.test(str[0])
? true
: false






where do promises and await reset out block statements?
if statements vs functions vs for loops


Create different questions testing principles operator precedence and concepts temporal dead zone and promises nesting
How the script is ran as anonymous
And how the prototype works in JavaScript with built in methods



Why does this exceed call stack
evaulation within arguments?
function sum(arr, n) {
  // Only change code below this line
return n <= 0
? 0
: sum(arr, --n) + arr[n]

  // Only change code above this line
}
console.log(sum([1,2,3,4], 3))


//LOOP ANALOGY TO RECURSION
  function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    return product;
  }

for (initialization; condition; afterthought)
  statement

the base case is similar to condition
// the last expression is similar to  afterthought

  function multiply(arr, n) {
    if (n <= 0) { //base case
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1]; 
    }
  }
  
  
  COMMON MISTAKE
  PROBLEM
was trying to use to bind an event listener with the following
why won't this work?
function hideMe() {
    if (document.getElementById("yu").style.display != "none"
    ) {
        document.getElementById("yu").style.display = "block"
    }
    else if (document.getElementById("yu").style.display != "block"
    ) {
        document.getElementById("yu").style.display = "none"
    }
}
SOLUTION
function showMe() {
    if (document.getElementById("test").style.display == "block") {
        document.getElementById("test").style.display = "none"
    }
    else {
        document.getElementById("test").style.display = "block"
    }
}


Don't use typeof
NaN is a number? typeof ("a" * 1) === "number"



