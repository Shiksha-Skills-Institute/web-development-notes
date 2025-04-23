const url = 'https://api.freeapi.app/api/v1/public/quotes';
const options = {method: 'GET', headers: {accept: 'application/json'}};
const quotesContainer = document.querySelector('.quotes');

try {
  const response = fetch(url, options).then( (response)=>{
     return response.json();
  } ).then( ( data )=> {
    console.log(data.data.data)
    const quotesData = data.data.data;

    var content = ''
    for( let quote of quotesData ){
        content += `
            <div class="card mt-3" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${quote.id}</h5>
                    <p class="card-text">${quote.content}</p>
                    <a href="#" class="card-link">${quote.author}</a>
                </div>
            </div>
            `
    }
    quotesContainer.innerHTML = content;
  });
  
} catch (error) {
  console.error(error);
}


