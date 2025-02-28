var a = ['bus', 'this is new'];
console.log('a value is', a[0]);

var multipleArray = ['20', 21, "Test", true];

console.log(multipleArray);

// for( defination pre run ; condition; postRun each cycle)
// 0

// 0 < 4
// 1 < 4
//2 < 4 
// 4 < 4

for( var arrayCounter = 0; arrayCounter < multipleArray.length; arrayCounter++ ){
    console.log(`multipleArray ${arrayCounter}`,typeof(multipleArray[arrayCounter]));
}