// var colors = ['yellow', 'green'];

let colors = ['yellow', 'green', 'Magenta'];

let colors2 = [ 'black', 'White', 'Browen' ];

if( colors.includes('red') ){
    let colors = ['red']
    console.log(colors);
}

console.log(colors);

const birds = {
    "type": "flying",
    "color": "white", 
}

// birds = {
//     "type": "landrover",
//     "color": "white", 
// }
console.log(birds);

// Destructuring
const { type } = birds;

// Select Index
const [ ,blue ] = colors;

const [ red, green ] = colors;

console.log( type, `Type` );

// console.log( red, blue );

console.log( blue );

//spread operator
console.log(...colors2)

console.log( [ ...colors, ...colors2 ] )
console.log( [colors, colors2] )
