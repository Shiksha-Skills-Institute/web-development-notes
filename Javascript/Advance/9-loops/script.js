let colors = { "tpye": 'red',  "type":"green"};

for( let key in colors ){
      console.log(key);
      console.log(colors[key])
}


colors = { "tpye": 'red',  "type":"green"};

for( let key of colors ){
      console.log(key);
      console.log(colors[key])
}

console.log(colors);


// colors = { "colour": 'red',  "type":"green"};

// for( let key of colors ){
//       console.log(key);
// }

// console.log(colors);