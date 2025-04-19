let pTags = document.querySelectorAll('p');

for( let key of pTags ){
    key.innerHTML = 'TEST'
    console.log(key)
}