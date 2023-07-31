//FILE SAVING
  function saveTextAsFile(str, contents){      
    var textToWrite = contents;
    var textToWrite = textToWrite.replace(/\n/g, "\r\n");
    var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
    var fileNameToSaveAs = `${str}.html`; //name file here

    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = `${str}`;//<--custom change, find out meaning

    window.URL = window.URL || window.webkitURL;

    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);

    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
  }

  function destroyClickedElement(event){
    document.body.removeChild(event.target);
  }



//MULTI-FILE READER
<input type="file" id="input" onchange="handleFiles(this)" multiple>
<br>
<span id ="lug"></span>

<script>

  function handleFiles(input) {
    let arr = []

    let lug = document.getElementById("lug")
    
    let fileList = input.files; /* now you can work with the file list */

    for (let i = 0; i < fileList.length; i++) {

     let reader = new FileReader()
       
       reader.readAsText(fileList[i])
      
               reader.onload = function() {
                
                arr.push(`${reader.result}`)
                 console.log(reader.result)
             
                        console.log(arr)
               lug.innerText = arr.join("\n")
      };
    }
  } 
</script>



//convert horizontal csv
function csvHorizontalSplitter(cvsStr) {
  cvsStr = cvsStr.split("\n")
  cvsStr.forEach(function (el, i) {
    cvsStr[i] = el.split("\t")
  })
  return cvsStr
}



//convert horizontal csv to js object
function csvHorizontal(csv){
let pill = {}
let arr2 = []
for (let i = 0; i < csv.length; i++) {
  let arr = []
  for (let j = 0; j < csv[i].length; j += 2) {

    if (i == 0 && csv[i][j]) {
      pill[csv[i][j]] = {}
    } else if (csv[i][j]) {
      pill[csv[0][j]][csv[i][j]] = csv[i][j + 1]
    }
  }
  arr2.push(arr)
}

return pill
}



//convert vertical csv
function csvVerticalSplitter(cvsStr) {
    cvsStr = cvsStr.split("|")
  /**/cvsStr.forEach(function (el, i) {
        cvsStr[i] = el.split("\n")

  /**/cvsStr[i].forEach(function (el2, j) {
            cvsStr[i][j] = el2.split("\t")
            cvsStr[i][j] = cvsStr[i][j].filter(el => el.length > 1)
        })

        cvsStr[i] = cvsStr[i].filter(el => el.length > 0)
    })
    return cvsStr
}



//convert vertical csv to js object
function csvVertical(csv) {
    let pill = {}
    let arr2 = []
    for (let i = 0; i < csv.length; i++) {
        let arr = []
        for (let j = 0; j < csv[i].length; j++) {

            if (j == 0 && csv[i][j]) {
                arr.push(`function ${csv[i][0][0]}(${csv[i][0][1]}){`)
            } else if (csv[i].length - 1 == j) {
                arr.push(`${csv[i][j][0]}}`)
            } else {
                arr.push(`let ${csv[i][j][0]} = (${csv[i][j][1]})`)
            }
        }
        pill[csv[i][0][0]] = arr.join("\n")
    }

    return pill
}



//convert full csv to js object
function csvFullSplitter(str) {
    let arr = str.split("\n")
    //convert full csv to js object
    var jsonObj = [];
    var headers = arr[0].split('\t');
    for (var i = 1; i < arr.length; i++) {
        var data = arr[i].split('\t');
        var obj = {};
        for (var j = 0; j < data.length; j++) {
            obj[headers[j]] = data[j];
        }
        jsonObj.push(obj);
    }

    return jsonObj 
}



//index finder after sorting
function sortIndex(x) {
return x
.map((a,i) => i)
.sort((a, b) => x[b] - x[a])
}



//array cleaner
function arrCleaner(arr){
//this cleans up the front and back of string with blank data
if(arr[0] == "") arr.shift()
if(arr[arr.length - 1] == "") arr.pop()
return arr
}



//CONVERTER FUNCTIONS
function firstLetterUppercase(str){
let firstLetter = str[0].toUpperCase()
let restOfString = str.slice(1)
let stringFinal = `${firstLetter}${restOfWord}`
return stringFinal
}



function toLowerCase(str){
let stringFinal = str.toLowerCase()
return wordFinal
}



function toUpperCase(str){
let stringFinal = str.toUpperCase()
return wordFinal
}



function tableMaker(str){
let arr = []
arr.push(`<table>`)
arr.push(`<tr>`)

        splitString = str.split(new RegExp(`${splitter}`))

splitString.forEach(function(el){

        i == 0
        ? arr.push(`<th>${el}</th>`)
        : arr.push(`<td>${el}</td>`)
}
)

arr.push(`</tr>`)

        arr.push(`</table>`)
return stringFinal
}



function stringWrapper(str){
let stringFinal = `"${str}"`
return stringFinal
}



function switchMaker(str){
        arr.push(`
case ${pear[0]}:
return ${pear[1]};
break;`)

let stringFinal = `"${str}"`
return stringFinal
}



function permutationMaker(str){
        for (let j = 0; j < grudge.length; j++){
          arr.push(`${grudge[i]} ${grudge[j]}`)
        }
}


      
function conditionalMaker(str){
        i == 0
          ? arr.push(`
if (${pear[0]}){
${pear[1]}
}`)
        : i == grudge.length - 1
          ? arr.push(`
else{
${pear[0]}
}`)
        : arr.push(`
else if (${pear[0]}){
${pear[1]}
}`)
}



/*
function htmlDewrapper(str){
        arr.push(`${grudge[i].replace(new RegExp(`<.*?${splitter}>`, 'gi'), "")}`)
}
*/


 
function htmlAddBreak(str){
        arr.push(`${grudge[i]}
<br>`)
}



function figureMaker(str){
	arr.push(`
<figure>
  <a href="${pear[4]}">
  <img src="../images/reading/${pear[0]}" 
       alt="${pear[1]}" 
       title="${pear[1]}">
  </a>
  <figcaption>
    <i>${pear[1]}</i>
    <br>
    <b>${pear[2]}</b>
    <br>
    ${pear[3]}
  </figcaption>
</figure>
`)

}



function objectMaker(str){

if(i > 0){
arr.push(`"${pear[1]}": {`)
pear.forEach(function(el, j){
arr.push(`"${heads[j]}" : "${el}"`)})
arr.push(`},`)}
}



function objectMaker(str){
        arr.push(`${input1}${grudge[i]}${input2}`)

}



/*
function splitterAndJoiner(str){
       if (grudge[i]) arr.push(`${grudge[i].split(new RegExp(`${splitter}`)).join("\t")}`)
}
*/



//duplicate remover, if wanting to change non-duplicates
    let mooby = []
    let mooby1 = []

    for (let i = 0; i < attr.length; i++){

      if(!mooby1.includes(attr[i])){
        mooby.push(`'${attr[i]}',`)
        mooby1.push(attr[i])
      }

    }



//functions for cleaning up sets and arrays
//duplicate function
function duplicate(n) {
  let clean = []

  for (let i = 0; i < n.length; i++) {
    if (!clean.includes(n[i])) {
      clean.push(n[i])
    }
  }

return clean

}



//rotating strings
function rotate(n) {
  let num = []

  for (let i = 0; i < n.length; i++) {
    num.push(n)
    n += n[0]
    n = n.slice(1)
  }
  console.log()
  return duplicate(num)
}



function equality(n) {

  for (let i = 0; i < n.length; i++) {

    for (let j = 0; j < n[i].length; j++) {

      for (let k = 0; k < n.length; k++) {

  if (!n[k].includes(n[i][j])) {
    return false
  }
      }

    }

  }

  return true

}



//intersection of sets, may need work for multiple sets
function intersection(n, o) {

  let intersect = []

  for (let i = 0; i < n.length; i++) {
    if (o.includes(n[i])
      && !intersect.includes(n[i])) {
      intersect.push(n[i])
    }
  }

  return intersect

}



//union of sets
function union(n) {
  return n.flat()

}



//difference of sets
function difference(n, o) {

  let diff = []

  for (let i = 0; i < n.length; i++) {
    if (!o.includes(n[i])
      && !diff.includes(n[i])) {
      diff.push(n[i])
    }
  }
  return diff

}



//cartesian set maker
function cartesian(n, o) {

  let cart = []

  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < o.length; j++) {
      cart.push([n[i], o[j]])
    }
  }

  return cart

}



//function for outputting multiple sets in through set functions
function multiArr(n /* use nested arrays */) {

  let full = []

  for (let i = 0; i < n.length; i++) {

    for (let k = 0; k < n.length; k++) {
      if (i == k) {

      }

      else {
        full.push(/* function name here */(n[i], n[k]))
      }

    }
  }

  return full

}



//successive differences for number sequences 1.2 p.12
	//magicNum generates arrays successive differences
function magicNum(x) {
  let arr = []
  for (let i = 0; i < x.length - 1; i++) {
    arr.push(x[i + 1] - x[i])
  }

  if (arr.every(a => arr[0] == a)) {
    return [arr]
  }

  return [magicNum(arr), [arr]].flat()

}



	//seqExpand expands the arrays from magicNum to continue sequence in parameter y
function seqExpand(y, z) {

  let x = magicNum(y)
  x.push(y) //this is needed because magicNum doesn't include original array

  for (let i = 0; i < z; i++) {
    for (let j = 0; j < x.length; j++) {

      j == 0
        ? x[j].push(x[j][0])
        : x[j].push(
          x[j][x[j].length - 1]
          + 
		  x[j - 1][x[j - 1].length - 1]
        )

    }
  }

  return x.reverse()
}



//perfect number finder
function perfect(n) {
  let num = []
  for (let i = 0; i <= n; i++) {
    if (n % i == 0) {
      num.push(i)
    }
  }

  return num.reduce((a,c) => a + c) - n == n
}



//factor finder
function factor(n) {
  let num = []
  for (let i = 0; i <= n; i++) {
    if (n % i == 0) {
      num.push(i)
    }
  }
  return num
}



//greatest common factor, dependent on factor function, this one runs faster than gcf
function gcf2(n) {
  n.sort((a, b) => a - b)//smallest number first

  let arr = []
  for (let i = 0; i < n.length; i++) {
    arr.push(
      factor(n[i])
        .sort((a, b) => b - a)//largest number first
    )
  }

  let tester;
  for (let j = 0; j < arr[0].length; j++) {
    let tester = []

    for (let i = 0; i < arr.length; i++) {

      if (arr[i].includes(arr[0][j])) {
        tester.push(arr[0][j])
      }

    }

    if (tester.length == arr.length) {
      return tester[0]
    }

  }

  return "none"
}



//euclid's algorithm, only two numbers as parameters
function euclid(n, o) {
    if (o == 0) {
      return n
  }
  else {
    return euclid(o, n % o) 
    }
}



// Sieve of Eratosthenes
// #1 prime number finder 
function prime(n) {
  let num = []
  for (let i = 0; i <= n; i++) {
    if (n % i == 0) {
      num.push(i)
    }
  }

  if (num.length == 2) {
    return n
  }
//will show undefined if not prime
}



// #2 list maker, generates list of numbers up to parameter
function count(n) {
  let list = []
  for (let i = 0; i <= n; i++) {
    list.push(i)
  }
  return list
}



// #3 final sieve depends on #1 and #2
function sieve(x) {

  //get divisors
  let divis = []
  let total = count(x)
  for (let i = 0; i < total.length; i++) {
    
    if (prime(i)) { //will show undefined if not prime
      divis.push(i)
    }

    if (i > Math.sqrt(x)) {
      break
    }
  }



//run divisors through list
  let primes = []
  let counter = 0
  for (let i = 2; i < total.length; i++) { //starting at 2 first prime
    counter = 0

    for (let j = 0; j < divis.length; j++) {
      if (total[i] % divis[j] != 0) {//tests number to see if divisible, if not then it is prime
        counter++
      }
    }

    if (counter == divis.length) {
      primes.push(total[i])
    }
  }

  return [divis, primes].flat()
}



// #4 optional depends on #3,#2, and #1, breaks down number into prime factorization
function primeFact(y) {

  let num = y
  let full = []
  let i = 0
  let primed = sieve(y)

  while (num >= primed[i]) {

if (num % primed[i] == 0) {
      full.push(primed[i])
      num /= primed[i]
    }

else {
  i++
}

  }

   return full
}



//least common multiple, needs primeFact, sieve, list, prime and duplicate functions
function lcm(n) {

  let arr = []
  for (let i = 0; i < n.length; i++) {
    arr.push(primeFact(n[i]))
  }

  let num = duplicate(arr.flat())

  let expon = [] //number and exponent
  let ct;
  let ct2;
  for (let i = 0; i < num.length; i++) {
    ct = 0

    for (let j = 0; j < arr.length; j++) {
      ct2 = 0

      for (let k = 0; k < arr[j].length; k++) {

        if (num[i] == arr[j][k]) {
          ct2++
        }

      }

      if (ct2 > ct) {
        ct = ct2
      }

    }

    expon.push(num[i] ** ct) //can change to show factorization exponent in array, if needed
  }

  let least = 1
  for (let i = 0; i < expon.length; i++) {
    least *= expon[i]
  }

  return least
}



//greatest common factor alternate, needs primeFact, sieve, list, prime and duplicate functions
function gcf(n) {

  let arr = []
  for (let i = 0; i < n.length; i++) {
    arr.push(primeFact(n[i]))
  }

  let num = duplicate(arr.flat())

  let expon = [] //number and exponent
  let ct;
  let ct2;
  for (let i = 0; i < num.length; i++) {
    ct = 100 // a number always larger than ct2 initially

    for (let j = 0; j < arr.length; j++) {
      ct2 = 0

      for (let k = 0; k < arr[j].length; k++) {

        if (num[i] == arr[j][k]) {
          ct2++
        }

      }

      if (ct2 < ct) {
        ct = ct2
      }

    }

    expon.push(num[i] ** ct) //can change to show factorization exponent in array, if needed
  }

  let great = 1
  for (let i = 0; i < expon.length; i++) {
    great *= expon[i]
  }

  return great
}



//figurate numbers 1.2 p.14
function tri(n) {
  return n * (n + 1) / 2
}



function square(n) {
  return n ** 2
}



function penta(n) {
  return n * (3 * n - 1) / 2
}



//divisibility tests
function twoDivis(n) {
  return +("" + n)[("" + n).length - 1] == 2
    || +("" + n)[("" + n).length - 1] == 4
    || +("" + n)[("" + n).length - 1] == 6
    || +("" + n)[("" + n).length - 1] == 8
    || +("" + n)[("" + n).length - 1] == 0

}



function threeDivis(n) {
  return ("" + n)
    .split("")
    .reduce((a, c) => +a + +c)
    % 3 == 0
}



//for 2 digits or more
function fourDivis(n) {
  return (+("" + n)[("" + n).length - 2]
    +
    +("" + n)[("" + n).length - 1])
    % 4 == 0
}



function fiveDivis(n) {
  return +("" + n)[("" + n).length - 1] == 0
    || +("" + n)[("" + n).length - 1] == 5
}



function sixDivis(x) {

  function twoDivis(n) {
    return +("" + n)[("" + n).length - 1] == 2
      || +("" + n)[("" + n).length - 1] == 4
      || +("" + n)[("" + n).length - 1] == 6
      || +("" + n)[("" + n).length - 1] == 8
      || +("" + n)[("" + n).length - 1] == 0
  }
  
  function threeDivis(n) {
    return ("" + n)
      .split("")
      .reduce((a, c) => +a + +c)
      % 3 == 0
  }

  return twoDivis(x) == threeDivis(x)
}



//for 3 digits or more
function eightDivis(n) {
  return (+("" + n)[("" + n).length - 3]
    +
    +("" + n)[("" + n).length - 2]
    +
    +("" + n)[("" + n).length - 1]
    )

    % 8 == 0
}



function nineDivis(n) {
  return ("" + n)
    .split("")
    .reduce((a, c) => +a + +c)
    % 9 == 0
}



function tenDivis(n) {
  return +("" + n)[("" + n).length - 1] == 0
}



\\Volume of a Cube\\
var volume=this.getField ("Text1").value
var side=Math.pow(volume, 1/3)
var newside= Math.round (side)
event.value=6*(Math.pow (newside,2))



\\GCD (Greatest Common Denominator)\\
function reduce(numerator,denominator){
  var gcd = function gcd(a,b){
    return b ? gcd(b, a%b) : a;
  };
  gcd = gcd(numerator,denominator);
  return [numerator/gcd, denominator/gcd];}



\\Rounding decimal precision\\change floating point
function precisionRound(number, precision) 

{
  var factor = Math.pow(10, precision);
  
return Math.round(number * factor) / factor;
}

console.log(precisionRound(1234.5678, 1));
// expected output: 1234.6
console.log(precisionRound(1234.5678, -1));
// expected output: 1230



\\Controlling decimal points\\
function highestCommonFactor(a,b) {
    if (b==0) return a;
    return highestCommonFactor(b,a%b);
}
var decimal = "1.75";
var decimalArray = decimal.split(".");
var leftDecimalPart = decimalArray[0]; // 1
var rightDecimalPart = decimalArray[1]; // 75

var numerator = leftDecimalPart + rightDecimalPart // 175
var denominator = Math.pow(10,rightDecimalPart.length); // 100
var factor = highestCommonFactor(numerator, denominator); // 25
denominator /= factor;
numerator /= factor;

document.getElementById("divSolution").innerText = numerator + "/" + denominator;

\\Alternatively\\
var a = 12345.67;

alert(a.toString().split(".")[0]); ///before
alert(a.toString().split(".")[1]); ///after