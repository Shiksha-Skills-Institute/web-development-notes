let myName = "Shiksha Skills Institute";

//charAt(index)
console.log( myName.charAt(0) );
console.log( myName[0] );

const a = "baa"; //ascii code = 203202202 / 203202
const b = "ba";
if (a < b) {
  // true
  console.log(`${a} is less than ${b}`);
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} are equal.`);
}

console.log( myName.length )
// 24



class myCustomClass {
    myName = "Shiksha Skills Institute Web Development learning class in JS"
    testString( stringArgs ){
        console.log(stringArgs);
    }
    test() {
        console.log('Test');
    }
}

let myCustomObject = new myCustomClass();

console.log(myCustomObject.myName);
console.log(myCustomObject.test());

// console.log(  )