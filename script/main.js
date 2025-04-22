var recipes = [];
var https = new XMLHttpRequest();
https.open('GET', 'https://forkify-api.herokuapp.com/api/search?q=pizza');
https.send();

https.addEventListener('readystatechange', function() {
    if (https.readyState === 4 && https.status === 200) {
        recipes = JSON.parse(https.response).recipes;
        display();
        // console.log(recipes);
    }
});

function display(){
    var data = '';
    for (var i = 0; i < recipes.length; i++) {
        data += `
            <div class="col-md-4">
                    <div class="card">
                        <img class="card-img-top" src="${recipes[i].image_url}" alt="Card image cap">
                        <div class="card-body">
                          <h5 class="card-title">${recipes[i].title}</h5>
                        </div>
                        <a href="${recipes[i].source_url}" class="btn btn-primary">Source</a>
                      </div>
                </div>
        `
    }

    document.getElementById('rowData').innerHTML = data;
}