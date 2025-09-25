var menuIcon = document.querySelector('.menu-icon');
var navLinks = document.querySelector('.nav-links');

// menuIcon.addEventListener('click', function(){
//     navLinks.classList.toggle('open');
// })

var menuFlag = 0; // Chowkidar

// menuFlag = 0
// menuIcon.addEventListener('click', function(){
//     if( menuFlag == 0 ){ // right gai
//         navLinks.style.display = 'flex';
//         menuFlag = 2;
//     } else {
//         navLinks.style.display = 'none';
//         menuFlag = 0;
//     }
// })

var rightSize = 15;
menuIcon.addEventListener('mouseenter', function(){
    rightSize = rightSize + 15;
    menuIcon.style.right = rightSize + 'px';
});

