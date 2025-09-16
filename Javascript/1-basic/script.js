// window.alert("Hello");

var headingElement = document.getElementsByTagName('h1');
console.log(headingElement);
console.log(headingElement[1]);

var idElement = document.getElementById('some-id');


console.log(idElement)

console.log(idElement.length)

var classElement = document.getElementsByClassName("some-class")
console.log('Class Element', classElement)
console.log('Class Length', classElement.length);

var queryClass = document.querySelector('.some-class')

console.log('Query Element', queryClass)
console.log('Query Length', queryClass.length);

var queryAllClass = document.querySelectorAll('.some-class')

console.log('QueryAll Element', queryAllClass)
console.log('QueryAll Length', queryClass.length);

var rendomP = document.getElementsByClassName('random-p');
rendomP[0].addEventListener('click', function() {
//    alert('You clicked the paragraph!');
    this.style.backgroundColor = 'red';
});

console.log('Random P', rendomP);