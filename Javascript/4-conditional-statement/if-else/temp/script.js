letsPlayButton = document.getElementById("lets-play-btn");
foodCheckBox = document.querySelector('#food');
smileCat = document.getElementById('smile-cat');
sadCat = document.getElementById('sad-cat');
angryCat = document.getElementById('angry-cat');


var angryFlag = 0;
letsPlayButton.addEventListener('click', function(){
    if(foodCheckBox.checked){
        smileCat.style.setProperty("display", "block", "important")
        sadCat.style.setProperty("display", "none", "important");
        angryCat.style.setProperty("display", "none", "important");
        angryFlag = 0;
    } else if( angryFlag == 3 && (! foodCheckBox.checked ) ){
        angryCat.style.setProperty("display", "block", "important"); // Angry
        smileCat.style.setProperty("display", "none", "important"); 
        sadCat.style.setProperty("display", "none", "important");
    } else {
        smileCat.style.setProperty("display", "none", "important"); // Sad
        sadCat.style.setProperty("display", "block", "important");
        angryFlag++; // 1
    } 
});