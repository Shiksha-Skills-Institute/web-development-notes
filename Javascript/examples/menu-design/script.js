var menuIcon = document.querySelector('.menu-icon');
var navLinks = document.querySelector('.nav-links');

// menuIcon.addEventListener('click', function(){
//     navLinks.classList.toggle('open');
// })

var menuFlag = 0; // Chowkidar

// menuFlag = 0
menuIcon.addEventListener('click', function(){
    if( menuFlag == 0 ){ // right gai
        navLinks.style.display = 'flex';
        alert("Menu Open");
        menuFlag = 2;
    } else {
        navLinks.style.display = 'none';
        menuFlag = 0;
        alert("Menu Close");
    }
})

