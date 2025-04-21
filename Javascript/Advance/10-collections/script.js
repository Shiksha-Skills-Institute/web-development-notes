let numbers = new Set([ 1, 2, 3]);

// let numbers = new Set([ 2, 2, 3]);

// console.log(numbers.has('2'));


console.log(numbers.values());

for(  let value of numbers.values()  ) {
	console.log(value);
}

// numbers = new WeakSet([2,4]);
console.log(numbers)


// const ws = new WeakSet();
// const foo = {'test': 'te'};
// const bar = {'TEST': 'test'};

// ws.add(foo);
// ws.add(bar);

// ws.has(foo); // true
// ws.has(bar); // true

// ws.delete(foo); // removes foo from the set
// ws.has(foo); // false, foo has been removed
// console.log(ws.has(bar)); // true, bar is retained

// if( foo == bar ){
//     console.log("foo and bar are same")
// }

// console.log(ws.value())



// Execute a callback on everything stored inside an object
function execRecursively(fn, subject, _refs = new WeakSet()) {
    // Avoid infinite recursion
    if (_refs.has(subject)) {
      return;
    }
  
    fn(subject);
    if (typeof subject === "object" && subject) {
      _refs.add(subject);
      for (const key in subject) {
        execRecursively(fn, subject[key], _refs);
      }
      _refs.delete(subject);
    }
  }
  
  const foo = {
    foo: "Foo",
    bar: {
      bar: "Bar",
    },
  };
  
  foo.bar.baz = foo; // Circular reference!
  execRecursively((obj) => console.log(obj), foo);